<?php

namespace App\Http\Controllers;

use App\Tinghir;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\TinghirResource;

class TinghirController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TinghirResource::collection(Tinghir::all());  
    } 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request->all();
        $tinghir = new Tinghir();
        $tinghir->user_id = 1;
        $tinghir->titre = $request->titre;
        $tinghir->slug = Str::slug($request->titre,'-');
        $tinghir->description = $request->description;

         $jdate = Carbon::now(); 
      if($request->hasFile('image'))
       {
        $image = date('His').$request->file('image')->getClientOriginalName();
        $path = "public\\tinghirs\\".$jdate->format('F').$jdate->year;
        $pathh = "tinghirs\\".$jdate->format('F').$jdate->year."\\".$image;
        $move = $request->file('image')->storeAs($path,$image);
        $tinghir->image = $pathh;
        }

        $tinghir->save(); 
        return $tinghir;


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tinghir  $tinghir
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        return new TinghirResource(Tinghir::whereSlug($slug)->first()); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tinghir  $tinghir
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tinghir $tinghir)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tinghir  $tinghir
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $tinghir = Tinghir::whereSlug($slug)->first();
        $tinghir->delete();
        return response()->json([]);
    }
}
