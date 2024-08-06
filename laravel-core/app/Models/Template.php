<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;
    protected $fillable = ["name", "description", "group_id", "photos", "videos", "audios", "message", "total_used", "total_orders", "total_responses", "created_by", "updated_by", "deleted_by", "deleted_at"];
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function deletedBy()
    {
        return $this->belongsTo(User::class, 'deleted_by');
    }
    public function group()
    {
        return $this->belongsTo(TemplatesGroup::class, 'group_id');
    }
    public function count_total_orders()
    {
        $conversations = RemarketingMessage::whereNotNull('sent_at')
            ->where("template", $this->id)
            ->orderBy('sent_at', 'desc')
            ->pluck("facebook_conversation");
        $conversations = FacebookConversation::find($conversations)->pluck("facebook_conversation_id");

        $orders_messages = FacebookMessage::where('message', 'like', '%سجلت الطلبية تاعك خلي برك الهاتف مفتوح باه يعيطلك الليفرور و ما تنساش الطلبية على خاطر رانا نخلصو عليها جزاك الله%')
        ->whereIN("facebook_conversation_id", $conversations)
        ->get();
        
        $total_orders = 0;
        foreach($orders_messages as $orders_message){

            $remarketing_message = RemarketingMessage::whereNotNull('sent_at')
            ->where('facebook_conversation', 
                FacebookConversation::where("facebook_conversation_id", $orders_message->facebook_conversation_id)
                ->first()
                ->id
            )
            ->where('sent_at', '<', $orders_message->created_at->addHour())
            ->orderBy('sent_at', 'desc')
            ->first();

            if($remarketing_message && $remarketing_message->template == $this->id){
                $total_orders++;
            }
        }
        $this->total_orders = $total_orders;
        $this->save();
    }

}
