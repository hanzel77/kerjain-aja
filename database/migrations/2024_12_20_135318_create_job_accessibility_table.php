<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('job_accessibility', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_id')->constrained('job_vacancy')->onDelete('cascade');
            $table->foreignId('accessibility_id')->constrained('accessibilities')->onDelete('cascade');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_accessibility');
    }
};