<?php

use App\Category;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    $now = Carbon::now()->toDateTimeString(); 

	    Category::insert([ 
	       ['name' =>'emploi','slug' =>'emploi','created_at'=> $now,'updated_at' =>$now],
	       ['name'=>'vehicule','slug' =>'auto-moto','created_at'=>$now,'updated_at'=>$now],
	       ['name'=>'Immobilier','slug' => 'vente-immobilier','created_at'=>$now,'updated_at'=>$now],
	       ['name'=>'Multi Services','slug'=>'multi-services','created_at'=>$now,'updated_at'=>$now],
	       ['name'=>'Ventes Divers','slug'=>'ventes-divers','created_at'=>$now,'updated_at'=>$now],
	       ['name'=>'Informatique & Multimedia','slug'=>'Informatique-ultimedia','created_at'=>$now,'updated_at'=>$now],
	       ['name'=>'Mariage','slug'=>'mariage','created_at'=>$now,'updated_at'=>$now],
	       ['name'=>'Animaux','slug'=>'animaux','created_at'=>$now,'updated_at'=>$now],
	    ]);
    }
}
