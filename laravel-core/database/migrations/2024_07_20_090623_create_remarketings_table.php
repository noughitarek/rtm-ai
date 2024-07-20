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
        Schema::create('remarketings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('programs_group_id')->constrained('programs_groups');
            $table->foreignId('templates_groups_id')->constrained('templates_groups');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('remarketings');
    }
};
