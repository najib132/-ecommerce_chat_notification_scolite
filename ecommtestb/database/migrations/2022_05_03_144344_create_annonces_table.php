<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnoncesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annonces', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->bigInteger('category_id')->unsigned(); 
            $table->foreign('category_id')->references('id')
                  ->on('category')->onDelete('cascade');

            $table->bigInteger('souscategory_id')->unsigned();
            $table->foreign('souscategory_id')->references('id')
                  ->on('souscategories')->onDelete('cascade');

            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')
                  ->on('users')->onDelete('cascade');
            

            $table->boolean('type')->default(false); 
            $table->string('domaine')->nullable();
            $table->string('contrat')->nullable();
            $table->string('entreprise')->nullable();
            $table->string('niveaua')->nullable();
            $table->string('poste')->nullable();
            $table->string('salaire')->nullable();
            $table->string('marque')->nullable();
            $table->string('marquem')->nullable();
            $table->string('modele')->nullable();
            $table->string('annee')->nullable();
            $table->string('km')->nullable();
            $table->string('carburant')->nullable();
            $table->string('puissance')->nullable();
            $table->string('poidsl')->nullable();
            $table->string('piece')->nullable();
            $table->string('autrepi')->nullable();
            $table->string('surface')->nullable();
            $table->string('chambre')->nullable();
            $table->string('salleb')->nullable();
            $table->string('faces')->nullable();
            $table->string('name');
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('description');
            $table->integer('prix')->nullable();
            $table->string('image')->nullable();
            $table->text('images')->nullable();
            $table->timestamp('deleted_at')->nullable();
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
        Schema::dropIfExists('annonces');
    }
}
