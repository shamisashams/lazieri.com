<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateProductTranslationAddExtra extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('product_translations', function (Blueprint $table) {
            $table->string('head_1')->nullable();
            $table->text('text_1')->nullable();
            $table->string('head_2')->nullable();
            $table->text('text_2')->nullable();
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
        Schema::table('product_translations', function (Blueprint $table) {
            $table->dropColumn('head_1');
            $table->dropColumn('head_2');
            $table->dropColumn('text_1');
            $table->dropColumn('text_2');
        });
    }
}
