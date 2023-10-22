<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category'; 

    public function annonces(){
    	return $this->hasMany('App\Annonce');
    }  
}
