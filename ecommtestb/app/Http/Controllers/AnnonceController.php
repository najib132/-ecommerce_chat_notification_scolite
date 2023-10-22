<?php

namespace App\Http\Controllers;

use App\Annonce;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Http\Resources\AnnoncesResource;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;


class AnnonceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() 
    {
        return AnnoncesResource::collection(Annonce::all()); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

       $Annonce = new Annonce();

       $Annonce->category_id = $request->category_id;
       $Annonce->souscategory_id = $request->souscategory_id;
       $Annonce->type = $request->type;
       $Annonce->domaine = $request->domaine;
       $Annonce->contrat = $request->contrat;
       $Annonce->entreprise = $request->entreprise;
       $Annonce->salaire = $request->salaire;
       $Annonce->niveaua = $request->niveaua;
       $Annonce->poste = $request->poste;
       $Annonce->marquem = $request->marquem;
       $Annonce->marque = $request->marque;
       $Annonce->modele = $request->modele;
       $Annonce->annee = $request->annee; 
       $Annonce->km = $request->km;
       $Annonce->carburant = $request->carburant;
       $Annonce->puissance = $request->puissance;

       $Annonce->piece = $request->piece;
       $Annonce->autrepi = $request->autrepi;
       $Annonce->surface = $request->surface;
       $Annonce->chambre = $request->chambre;
       $Annonce->salleb = $request->salleb;
       $Annonce->faces = $request->faces;
       $Annonce->name = $request->name;
       $Annonce->title = $request->name;
       $Annonce->slug = Str::slug($request->name,'-');

       $Annonce->description = $request->description;
       $Annonce->prix = $request->prix;

       
       $jdate = Carbon::now(); 
      if($request->hasFile('image'))
       {
        $image = date('His').$request->file('image')->getClientOriginalName();
        $path = "public\\annonces\\".$jdate->format('F').$jdate->year;
        $pathh = "annonces\\".$jdate->format('F').$jdate->year."\\".$image;
        $move = $request->file('image')->storeAs($path,$image);
        $Annonce->image = $pathh;
        }
       
       $Annonce->user_id = 1;
       $Annonce->save(); 
       return $Annonce;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
         return new AnnoncesResource(Annonce::whereSlug($slug)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$slug)
    {
       $Annonce = Annonce::whereSlug($slug)->first();

       $Annonce->category_id        = $request->category_id;
       $Annonce->souscategory_id    = $request->souscategory_id;
       $Annonce->type               = $request->type;
       $Annonce->domaine            = $request->domaine;
       $Annonce->contrat            = $request->contrat;
       $Annonce->entreprise         = $request->entreprise;
       $Annonce->salaire            = $request->salaire;
       $Annonce->niveaua            = $request->niveaua;
       $Annonce->poste              = $request->poste;
       $Annonce->marquem            = $request->marquem;
       $Annonce->marque             = $request->marque;
       $Annonce->modele             = $request->modele;
       $Annonce->annee              = $request->annee; 
       $Annonce->km                 = $request->km;
       $Annonce->carburant          = $request->carburant;
       $Annonce->puissance          = $request->puissance;
       $Annonce->piece              = $request->piece;
       $Annonce->autrepi            = $request->autrepi;
       $Annonce->surface            = $request->surface;
       $Annonce->chambre            = $request->chambre;
       $Annonce->salleb             = $request->salleb;
       $Annonce->faces              = $request->faces;
       $Annonce->name               = $request->name;
       $Annonce->title              = $request->title;
       $Annonce->slug               = Str::slug($request->name,'-');
       $Annonce->description        = $request->description;
       $Annonce->prix               = $request->prix;

       $jdate                       = Carbon::now(); 
      if($request->hasFile('image'))
       {
        $image = date('His').$request->file('image')->getClientOriginalName();
        $path = "public\\annonces\\".$jdate->format('F').$jdate->year;
        $pathh = "annonces\\".$jdate->format('F').$jdate->year."\\".$image;
        $move = $request->file('image')->storeAs($path,$image);
        $request->image = $pathh;
        $Annonce->image = $request->image;
        }
       $Annonce->user_id = 1;

       $Annonce->save();

       return $Annonce;
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {

        $annonce = Annonce::whereSlug($slug)->first();
        $annonce->delete();
        $path = public_path("storage/" . $annonce->image);
        //dd($path);

        return response(["response" => File::delete($path)], 204);
    }
}
