<?php

use Illuminate\Http\Request;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
 

Route::post('login', 'ApiController@login');
Route::post('register', 'ApiController@register'); 

Route::get('landing', 'LandingPageController@index');
Route::get('/annonces/show/{slug}', 'AnnonceController@show');

Route::get('tinghirs','TinghirController@index');
Route::get('/tinghirs/show/{slug}', 'TinghirController@show');


Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('logout', 'ApiController@logout');
    
    Route::get('category','CategoryController@index');  

    Route::get('souscategory','SouscategoryController@index'); 

    Route::get('annonces', 'AnnonceController@index');
    Route::post('annonces', 'AnnonceController@store');
    Route::post('annonces/{slug}', 'AnnonceController@update');
    Route::delete('annonces/{slug}', 'AnnonceController@destroy');

    Route::get('users', 'UsersController@index');
    Route::post('users', 'UsersController@store');
    Route::post('users/{id}', 'UsersController@update');
    Route::delete('users/{slug}', 'UsersController@destroy');
    Route::get('/users/show/{id}', 'UsersController@show');


    
    Route::post('tinghirs', 'TinghirController@store');
    Route::put('tinghirs/{slug}', 'TinghirController@update');
    Route::delete('tinghirs/{slug}', 'TinghirController@destroy');

    Route::post('messages', 'MessagesController@sendMessage');
    Route::post('messageDirect', 'MessagesController@sendDirectMessage');

    Route::get('cart', 'CartController@index');
    Route::post('cart', 'CartController@store');

});
 

 
 