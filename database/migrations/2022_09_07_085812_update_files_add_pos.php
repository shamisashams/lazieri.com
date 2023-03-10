<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateFilesAddPos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('files', function (Blueprint $table) {
            $table->boolean('in_middle_1')->default(0)->nullable();
            $table->boolean('in_middle_2')->default(0)->nullable();
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
        Schema::table('files', function (Blueprint $table) {
            $table->dropColumn('in_middle_1');
            $table->dropColumn('in_middle_2');
        });
    }
}
