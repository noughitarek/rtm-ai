<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RemarketingMessage extends Model
{
    use HasFactory;
    protected $fillable = ["remarketing", "template", "facebook_conversation", "send_at", "sented_at"];

    
}
