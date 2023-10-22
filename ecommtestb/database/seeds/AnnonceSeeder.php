<?php

use App\Annonce;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AnnoncesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i <= 70; $i++) { 
            Annonce::create([
            	'category_id' => '1',
                'souscategory_id' => '1',
            	'user_id' => '1',
                'title' => 'Cherche emploi'.$i,
                'name' => 'Cherche emploi'.$i,
                'slug' => 'Cherche-emploi'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\emploi.jpg',
                'images' => '["annonces\\\September2020\\\emploi1.jpg","annonces\\\September2020\\\emploi2.jpg","annonces\\\September2020\\\emploi3.jpg"]'
            ]);
        }

        for ($i=1; $i <= 70; $i++) {
            Annonce::create([
            	'category_id' => '2',
            	'souscategory_id' => '6',
                'user_id' => '1',
                'title' => 'Cherche voiture'.$i,
                'name' => 'Cherche voiture'.$i,
                'slug' => 'Cherche-voiture'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\voiture.jpg',
                'images' => '["annonces\\\September2020\\\voiture1.jpg","annonces\\\September2020\\\voiture2.jpg","annonces\\\September2020\\\voiture3.jpg","annonces\\\September2020\\\voiture4.jpg","annonces\\\September2020\\\voiture5.jpg"]',
            ]);
        }

        for ($i=1; $i <= 70; $i++) {
            Annonce::create([
            	'category_id' => '3',
            	'souscategory_id' => '11',
                'user_id' => '1',
                'title' => 'appartement a vendre'.$i,
                'name' => 'appartement a vendre'.$i,
                'slug' => 'appartement-a-vendre'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\appartement.jpg',
                'images' => '["annonces\\\September2020\\\appartement1.jpg","annonces\\\September2020\\\appartement2.jpg","annonces\\\September2020\\\appartement3.jpg","annonces\\\September2020\\\appartement4.jpg","annonces\\\September2020\\\appartement5.jpg"]',
            ]);
        }

        for ($i=1; $i <= 70; $i++) {
            Annonce::create([
            	'category_id' => '4',
            	'souscategory_id' => '20',
                'user_id' => '1',
                'title' => 'cours de soutien'.$i,
                'name' => 'cours de soutien'.$i,
                'slug' => 'cours-de-soutien'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\service.jpg',
                'images' => '["annonces\\\September2020\\\service1.jpg","annonces\\\September2020\\\service2.jpg","annonces\\\September2020\\\service3.jpg","annonces\\\September2020\\\service4.jpg","annonces\\\September2020\\\service5.jpg"]',
            ]);
        }

        for ($i=1; $i <= 70; $i++) {
            Annonce::create([
            	'category_id' => '5',
            	'souscategory_id' => '23',
                'user_id' => '1',
                'title' => 'parapluit a vendre'.$i,
                'name' => 'parapluit a vendre'.$i,
                'slug' => 'parapluit-a-vendre'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\diver.jpg',
                'images' => '["annonces\\\September2020\\\diver1.jpg","annonces\\\September2020\\\diver2.jpg","annonces\\\September2020\\\diver3.jpg","annonces\\\September2020\\\diver4.jpg","annonces\\\September2020\\\diver5.jpg"]',
            ]);
        }

        for ($i=1; $i <= 70; $i++) {
            Annonce::create([
            	'category_id' => '6',
            	'souscategory_id' => '37',
                'user_id' => '1',
                'title' => 'Cherche pc'.$i,
                'name' => 'Cherche pc'.$i,
                'slug' => 'Cherche-pc'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\pc.jpg',
                'images' => '["annonces\\\September2020\\\pc1.jpg","annonces\\\September2020\\\pc2.jpg","annonces\\\September2020\\\pc3.jpg","annonces\\\September2020\\\pc4.jpg","annonces\\\September2020\\\pc5.jpg"]',
            ]);
        }

        for ($i=1; $i <= 70; $i++) {
            Annonce::create([
            	'category_id' => '7',
            	'souscategory_id' => '42',
                'user_id' => '1',
                'title' => 'Cherche fille pour mariage'.$i,
                'name' => 'Cherche fille pour mariage'.$i,
                'slug' => 'Cherche-fille-pour-mariage'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\mariage.jpg',
                'images' => '["annonces\\\September2020\\\mariage1.jpg","annonces\\\September2020\\\mariage2.jpg","annonces\\\September2020\\\mariage3.jpg","annonces\\\September2020\\\mariage4.jpg","annonces\\\September2020\\\mariage5.jpg"]',
            ]);
        }

        for ($i=1; $i <= 70; $i++) {
            Annonce::create([
            	'category_id' => '8',
            	'souscategory_id' => '43',
                'user_id' => '1',
                'title' => 'chat a vendre'.$i,
                'name' => 'chat a vendre'.$i,
                'slug' => 'chat-a-vendre'.$i,
                'prix' => rand(149999, 249999),
                'description' =>'Lorem '. $i . ' ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!',
                'image' => 'annonces\September2020\animaux.jpg',
                'images' => '["annonces\\\September2020\\\animaux1.jpg","annonces\\\September2020\\\animaux2.jpg","annonces\\\September2020\\\animaux3.jpg","annonces\\\September2020\\\animaux4.jpg","annonces\\\September2020\\\animaux5.jpg"]',
            ]);
        }    
    }
}
