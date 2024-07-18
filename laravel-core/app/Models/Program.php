<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;
    protected $fillable = ["name", "description", "group_id", "reuse_after", "total_used", "total_orders", "total_responses", "created_by", "updated_by", "deleted_by", "deleted_at"];
}
