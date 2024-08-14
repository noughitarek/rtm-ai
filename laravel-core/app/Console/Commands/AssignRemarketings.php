<?php

namespace App\Console\Commands;

use App\Models\Remarketing;
use Illuminate\Console\Command;
use App\Models\FacebookConversation;

class AssignRemarketings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:assign-remarketings';

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
        $remarketings = Remarketing::whereNull('deleted_at')
            ->whereNull('deleted_by')
            ->where('is_active', true)
            ->get();

        $conversations = FacebookConversation::whereNull('remarketing_id')
            ->get();

        foreach($conversations as $conversation){

            $i = 0;
            while($i<100){

                $conversation = FacebookConversation::find($conversation->id);
                if($conversation->remarketing_id == null){
                    $remarketing = $remarketings->random();
                    
                    if($conversation->facebook_page_id == $remarketing->facebookPage->facebook_page_id && $conversation->started_at == $remarketing->created_at){
                        $conversation->remarketing_id = $remarketing->id;
                        $conversation->save();
                        $this->info("Assigned remarketing ID {$remarketing->id} to conversation ID {$conversation->id}");
                        break;
                    }
                }else{
                    break;
                }
                $i++;
            }
        }
    }
}
