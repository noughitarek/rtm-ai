<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('remarketing_messages', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('remarketing')->constrained('remarketings');
            $table->foreignId('template')->nullable()->constrained('templates');
            $table->foreignId('facebook_conversation')->constrained('facebook_conversations');

            $table->timestamp('send_at');
            $table->timestamp('sented_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('remarketing_messages');
    }
};