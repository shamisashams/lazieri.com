<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateProductsChange extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('products', function (Blueprint $table) {
            $table->float('price')->nullable()->change();
            $table->string('code')->nullable()->change();
            $table->boolean('stock')->nullable()->change();
            $table->boolean('popular')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('products', function (Blueprint $table) {
            $table->float('price')->default(0);
            $table->string('code')->change();
            $table->string('payment_type')->nullable();
            $table->boolean('stock')->change();
            $table->boolean('popular')->change();
        });
    }
}
