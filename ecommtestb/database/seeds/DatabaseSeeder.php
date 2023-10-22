<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        $this->call(CategorySeeder::class);
        $this->call(SouscategorySeeder::class);
        $this->call(UserSeeder::class);
        $this->call(AnnoncesTableSeeder::class);
        $this->call(TinghirSeeder::class);
    }
}
