<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RemarketingMessage extends Model
{
    use HasFactory;
    protected $fillable = ["remarketing", "template", "templates_group", "facebook_conversation", "send_at", "sent_at"];
    public function template()
    {
        return $this->belongsTo(Template::class, 'template');
    }
    public function templates_group()
    {
        return $this->belongsTo(TemplatesGroup::class, 'templates_group');
    }
    public function remarketing()
    {
        return $this->belongsTo(Remarketing::class, 'remarketing');
    }
    public function facebook_conversation()
    {
        return $this->belongsTo(FacebookConversation::class, 'facebook_conversation');
    }
    public function facebook_page()
    {
        return $this->hasOneThrough(
            FacebookPage::class, 
            FacebookConversation::class,
            'facebook_page_id',
            'id',
            'facebook_conversation',
            'facebook_page_id'
        );
    }
    
}
