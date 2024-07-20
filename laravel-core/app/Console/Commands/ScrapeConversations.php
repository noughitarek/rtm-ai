<?php

namespace App\Console\Commands;

use App\Models\Setting;
use App\Models\FacebookPage;
use App\Models\FacebookMessage;
use Illuminate\Console\Command;
use App\Models\FacebookConversation;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class ScrapeConversations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scrape-conversations';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $pages = FacebookPage::whereNull('expired_at')->where('type', 'business')->get();
        foreach($pages as $page)
        {
            $nextpage = Setting::where('path' , 'next_page_'.$page->facebook_page_id)->first();
            $data = [
                'access_token' => $page->access_token,
                'limit' => config('settings.limits.conversations'),
                'fields' => 'can_reply,senders,messages.limit(' . config('settings.limits.message_per_conversation') . '){id,message,created_time,from,to}'
            ];

            if ($nextpage) {
                $data['after'] = $nextpage->content;
            }
            
            try
            {
                $this->get_conversations($data, $page);
            }catch (\Exception $e){
                echo 'Error: ' . $e->getMessage().' In '.$page->name;
            }
        }
    }

    private function get_conversations($data, $page)
    {
        $response = Http::timeout(60)->get('https://graph.facebook.com/me/conversations', $data);
        if ($response->successful()){
            $responseData = $response->json();

            if(isset($responseData['data'])){
                $started_at = $ended_at = $last_from_page_at = $last_from_user_at = $last_from = null;
                $total_user_messages = $total_page_messages = 0;

                foreach($responseData['data'] as $conversation){
                    $messages = [];

                    foreach($conversation['messages']['data'] as $message){
                        $createdTime = Carbon::parse($message['created_time']);

                        $messageData = array(
                            "facebook_conversation_id" => (string)$conversation['id'],
                            'facebook_message_id' => (string)$message['id'],
                            "sented_from" => $message['from']['id']==$page->facebook_page_id?'page':'user',
                            "message" => $message['message'],
                            'created_at' => $createdTime
                        );

                        if (is_null($started_at) || $createdTime < $started_at)
                            $started_at = $createdTime;
                        
                        if (is_null($ended_at) || $createdTime > $ended_at){
                            $ended_at = $createdTime;
                            $last_from = $message['from']['id'] == $page->facebook_page_id ? 'page' : 'user';
                        }

                        
                        if ($message['from']['id'] == $page->facebook_page_id){
                            $total_page_messages++;

                            if (is_null($last_from_page_at) || $createdTime > $last_from_page_at)
                                $last_from_page_at = $createdTime;
                        } else {
                            $total_user_messages++;

                            if (is_null($last_from_user_at) || $createdTime > $last_from_user_at)
                                $last_from_user_at = $createdTime;
                        }
                        $messages[] = $messageData;
                    }
                    $conversationData  = array(
                        "facebook_user_id" => (string)$conversation["senders"]["data"][0]["id"],
                        "facebook_conversation_id" => (string)$conversation['id'],
                        "facebook_page_id" => (string)$page->facebook_page_id,
                        "name" => $conversation["senders"]["data"][0]["name"],
                        "email" => $conversation["senders"]["data"][0]["email"],
                        "can_reply" => $conversation["can_reply"]==1,
                        "last_from" => $last_from,
                        "started_at" => $started_at,
                        "ended_at" => $ended_at,
                        "last_from_page_at" => $last_from_page_at,
                        "last_from_user_at" => $last_from_user_at,
                        "total_user_messages" => $total_user_messages,
                        "total_page_messages" => $total_page_messages,
                    );

                    FacebookConversation::createOrUpdate($conversationData);
                    FacebookMessage::createOrUpdate($messages);
                }
                
                $this->info('Total: ' . count($responseData['data']).' From '. $page->name);
            }else{
                $this->info('No data found in the response.');
            }
        }else{
            $this->error('Error occurred while fetching data from Facebook API.');
            $this->error($response->body());
        }
        
        if (isset($responseData['paging']['cursors']['after'])) {
            $setting = Setting::where('path' ,'next_page_'.$page->facebook_page_id)->first();
            if(!$setting)
            {
                $setting = Setting::create([
                    'path' => 'next_page_'.$page->facebook_page_id,
                    'content' => $responseData['paging']['cursors']['after'],
                ]);
            }
            $setting->update(['content'=>$responseData['paging']['cursors']['after']]);
        }
        else
        {
            Setting::where('path' ,'next_page_'.$page->facebook_page_id)->delete();
        }
    }
}
