<?php

use Illuminate\Database\Seeder;
use App\Tinghir;
use Carbon\Carbon;

class TinghirSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i <= 70; $i++) {
            Tinghir::create([ 
                'titre' => 'Donec sit amet elementum libero',
                'slug' => 'toudgha-tizgui'.$i,
                'description' =>'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                'image' => 'tinghirs\October2020\tizgui ('.$i.').jpg',
            ]);
        }
    }
}
