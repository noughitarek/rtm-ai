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
        if (!Schema::hasColumn('program_records', 'order_status')) {
            Schema::table('program_records', function (Blueprint $table) {
                $table->integer('order_status')
                ->after('program_id')
                ->default(0);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('program_records', function (Blueprint $table) {
            $table->dropColumn('order_status');
        });
    }
};
