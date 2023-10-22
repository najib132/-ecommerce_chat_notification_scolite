<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\SouscategoryResource;
use App\Souscategory;

class SouscategoryController extends Controller
{
	public function index(){
       
      return SouscategoryResource::collection(Souscategory::all()); 
	}
} 
