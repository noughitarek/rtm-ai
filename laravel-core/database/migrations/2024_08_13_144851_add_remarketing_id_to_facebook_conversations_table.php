<?php

use App\Models\Remarketing;
use App\Models\FacebookConversation;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasColumn('facebook_conversations', 'remarketing_id')) {
            Schema::table('facebook_conversations', function (Blueprint $table) {
                $table->foreignId('remarketing_id')
                ->after('program_id')
                ->nullable()
                ->constrained('remarketings');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('facebook_conversations', function (Blueprint $table) {
            $table->dropForeign(['remarketing_id']);
            $table->dropColumn('remarketing_id');
        });
    }
};
