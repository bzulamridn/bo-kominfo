<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// ==================== AUTH ============================= //
Route::post('/register', 'AuthController@register'); // Registrasi
Route::get('/tesendemail', 'AuthController@sendEmail'); // => Tes Kirim Email
Route::get('/resend/{email}', 'AuthController@resendEmail'); // Resend Passcode ke Email
Route::get('/conf/{email}/{passcode}', 'AuthController@passcodeConf'); // Kirim Passcode Ke Email
Route::get('/sendlink/{email}', 'AuthController@cekEmail');
Route::get('/setSession/{id}/{akses}', 'AuthController@setSession');
// +++++++++++++++= Login
Route::post('/login', 'AuthController@login');
Route::get('/login/{username}/{password}/{akses}', 'AuthController@login');
Route::get('/loginop/{email}/{password}/{akses}', 'AuthController@loginop');
Route::post('/loginop', 'AuthController@loginop');
// =================end Login 
Route::get('/user/{akses}/{id}', 'AuthController@getUser');
Route::get('/logout', 'AuthController@logout');

//===================== AGENDA ============================//
Route::post('/createagenda', 'AgendaController@createAgenda');
Route::get('agendaku/{id}', 'AgendaController@showAgendaById');
Route::get('/fasilitas', 'AgendaController@getFasilitas');
Route::get('/addfasilitas/{fasilitas}', 'AgendaController@addFasilitas');
Route::get('/fasilitashapus/{id}', 'AgendaController@delFasilitas');

Route::get('/agendapending', 'AgendaController@getAgendaPending');
Route::get('/agendasetuju', 'AgendaController@getAgendaSetuju');
Route::get('/detailagenda/{id}', 'AgendaController@detailAgenda');
Route::get('/konfirmasiok/{id}/{catatan}', 'AgendaController@inputToShowTable');
Route::get('/konfirmasicancel/{id}/{catatan}', 'AgendaController@tidakDisetujui');

//======================= SHOW AGENDA ============================//
Route::get('/dashboard', 'AgendaController@dashboard');
Route::get('/tv', 'AgendaController@showTv');

//======================= OPERATOR ==========================//
Route::get('/operator', 'AgendaController@getOperator');
Route::post('/addoperator', 'AgendaController@addOperator');
Route::get('/deloperator/{id}', 'AgendaController@delOperator');


//-======================== SYARAT dan KETENTUAN ============================//
Route::get('/syarat', 'AgendaController@getSyarat');
Route::post('/simpansyarat', 'AgendaController@updateSyarat');

//====================== Tes API =========================//
Route::get('/tesbetween', 'AgendaController@inputToShowTable');
Route::get('/sendemailop', 'AgendaController@sendNotifToOp');

// ==================== Instansi ========================//
Route::get('getinstansi', 'AgendaController@getInstansi');
Route::get('/aktiforblock/{val}/{id}', 'AgendaController@aktifOrBlock');
Route::post('/resetpassword', 'AuthController@resetPassword');