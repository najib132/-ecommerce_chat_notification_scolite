<?php

use Illuminate\Database\Seeder;
use App\Souscategory;
use Carbon\Carbon;

class SouscategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now()->toDateTimeString(); 
    	Souscategory::insert([
	      ['name' =>'offre-demploi','slug' =>'offre-demploi','category_id'=>1,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'demande-demploi','slug' =>'demande-demploi','category_id'=>1,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'demande de stage','slug' =>'demande de stage','category_id'=>1,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'freelance','slug' =>'freelance','category_id'=>1,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'formation-professionelle','slug' =>'formation-professionelle','category_id'=>1,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'bateau-jestki','slug' =>'bateau-jestki','category_id'=>2,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'moto-2-route','slug' =>'moto-2-route','category_id'=>2,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'voiture','slug' =>'voiture','category_id'=>2,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'velos','slug' =>'velos','category_id'=>2,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'pieces-de-rechange','slug' =>'pieces-de-rechange','category_id'=>2,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'appartement','slug' =>'appartement','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'maison-et-villas','slug' =>'maison-et-villas','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'bureau-blateau','slug' =>'bureau-blateau','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'magazin-depot-hangar-cave','slug' =>'magazin-depot-hangar-cave','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'terrain-et-ferme-agricole','slug' =>'terrain-et-ferme-agricole','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'locations-vacances','slug' =>'locations-vacances','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'colocation','slug' =>'colocation','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'studios','slug' =>'studios','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'autre-immobilier-vente-et-location','slug' =>'autre-immobilier-vente-et-location','category_id'=>3,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'cours-de-soutien','slug' =>'cours-de-soutien','category_id'=>4,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'services-divers','slug' =>'services-divers','category_id'=>4,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'perdu-de-vue','slug' =>'perdu-de-vue','category_id'=>4,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'meubles','slug' =>'meubles','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'electromenage','slug' =>'electromenage','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'music','slug' =>'music','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'beauté','slug' =>'beauté','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'vitement','slug' =>'vitement','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'materiels-medicaux','slug' =>'materiels-medicaux','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'articles-de-sport','slug' =>'articles-de-sport','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'jeux-enfant','slug' =>'jeux-enfant','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'echange','slug' =>'echange','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'articles-bebe','slug' =>'articles-bebe','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'materieaux-equipement','slug' =>'materieaux-equipement','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'business-affaires','slug' =>'business-affaires','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'voyages-vacances','slug' =>'voyages-vacances','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'autre-vente','slug' =>'autre-vente','category_id'=>5,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'telephone-portable','slug' =>'telephone-portable','category_id'=>6,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'pc-bureau-pc-portable-tablette','slug' =>'pc-bureau-pc-portable-tablette','category_id'=>6,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'materiel-informatique','slug' =>'materiel-informatique','category_id'=>6,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'jeux-video','slug' =>'jeux-video','category_id'=>6,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'appariel-photo','slug' =>'appariel-photo','category_id'=>6,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'mariage','slug' =>'mariage','category_id'=>7,'created_at'=> $now,'updated_at' =>$now],
	      ['name' =>'animaux','slug' =>'animaux','category_id'=>8,'created_at'=> $now,'updated_at' =>$now],
    	]);
        
    }
}
