<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Contracts\Session\Session;

Route::get('/', function () {
    return view('index');
});

Route::get('/auth', function () {
    return view('auth.index');
});

Route::get('/op', function () {
    return view('op.index');
});

Route::get('/show', function () {
    return view('show.index');
});

Route::get('/WA', 'AgendaController@tesWa');

Route::get('/{any}', function ($any) {

    return redirect('/');
  
  })->where('any', '.*');
