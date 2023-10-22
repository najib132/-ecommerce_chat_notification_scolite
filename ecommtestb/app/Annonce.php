<?php

namespace App; 

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Annonce extends Model
{
	use SoftDeletes;
    protected $guarded = []; 
	
    public function category() {
    	return $this->belongsTo('App\Category'); 
    }

    public function souscategory() {
    	return $this->belongsTo('App\Souscategory');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }
}
