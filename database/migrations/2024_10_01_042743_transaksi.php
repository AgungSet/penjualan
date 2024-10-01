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
    { Schema::create('transaksi', function (Blueprint $table) {
        $table->date('tanggal');
        $table->string('nama')->unique();
        $table->integer('nomor')->nullable();
        $table->integer('produk');
        $table->integer('Jumlah');
        $table->integer('totalpembayaran');
        $table->timestamps();
    });
    
    }
};