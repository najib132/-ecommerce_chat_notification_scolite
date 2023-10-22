<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Souscategory extends Model
{
    public function annonces(){ 
    	return $this->hasMany('App\Annonce');
    }
}
