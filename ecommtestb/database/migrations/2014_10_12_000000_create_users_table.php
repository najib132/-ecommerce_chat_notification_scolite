<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name'); 
            $table->string('email')->unique();
            $table->string('telephone')->unique()->nullable();
            $table->date('daten')->nullable();  

            $table->string('autreh')->nullable();
                  
            $table->boolean('is_admin')->default(0); 

            $table->string('autrei')->nullable();
            $table->string('adressem')->nullable();
            $table->string('adresser')->nullable();
            $table->string('image')->nullable();
            $table->text('images')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
