<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\AnnoncesResource;
use App\Annonce;

class LandingPageController extends Controller
{
    public function index() 
    {
        return AnnoncesResource::collection(Annonce::all()); 
    }
}
