<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\InstansiModel;
use App\OperatorModel;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(Request $req)
    {
        $cekEmail = InstansiModel::where('email', $req->email)->get()->count(); // Cek Email Apakah sudah pernah digunakan
        if ($cekEmail > 0) {
            return response()->json(['status' => '2'], 200);
        } else {
            $passcode = rand(100000, 999999);
            $sendEmail = $this->sendEmail($req->email, $passcode);
            if ($sendEmail == '1') {
                InstansiModel::create([
                    'nama' => $req->nama,
                    'no_hp' => $req->no_hp,
                    'email' => $req->email,
                    'passcode' => $passcode,
                    'username' => $req->username,
                    'password' => bcrypt($req->password),
                    'aktif' => '0'
                ]);
                return response()->json(['status' => '1'], 200);
            } else {
                return response()->json(['status' => '0'], 200);
            }
        }
    }

    public function login(Request $req)
    {
        $username = $req->username;
        $password = $req->password;
        $akses = $req->akses;
        $data = InstansiModel::where('username', $username)->get()->last();

        if (Hash::check($password, $data->password)) {
            if ($data->aktif != 1) {
                return response()->json(['status' => '0'], 200);
            } else {
                Session::put('akses', $akses);
                //session()->put('akses', $akses);
                return response()->json(['status' => '1', 'data' => $data], 200);
            }
        } else {
            return response()->json(['status' => '0'], 200);
        }
    }

    public function loginop(Request $req)
    {
        $email = $req->email;
        $password = $req->password;
        $akses = $req->akses;
        $data = OperatorModel::where('email', $email)->get()->last();

        if (Hash::check($password, $data->password)) {
            return response()->json(['status' => '1', 'data' => $data], 200);
        } else {
            return response()->json(['status' => '0'], 200);
        }
    }


    public function getUser(Request $req)
    {
        if ($req->akses == 'ins') {
            $data = InstansiModel::where('id', $req->id)->get()->last();
            return response()->json(['data' => $data], 200);
        } else {
            $data = OperatorModel::where('id', $req->id)->get()->last();
            return response()->json(['data' => $data], 200);
        }
    }

    public function sendEmail($email_add, $passcode)
    {
        $data = array(
            'passcode' => $passcode
        );

        Mail::send('email_pascode', $data, function ($mail) use ($email_add) {
            $mail->to($email_add, 'no-reply')->subject("Kode Akses / Passcode");
            $mail->from('tcmskw@gmail.com', 'TCM Room');
        });

        if (Mail::failures()) {
            return '0';
        } else {
            return '1';
        }
    }

    public function resendEmail(Request $req)
    {

        $email = $req->email;
        $passcode = rand(100000, 999999);
        $sendEmail = $this->sendEmail($req->email, $passcode);

        if ($sendEmail == '1') {
            InstansiModel::where('email', $email)->update([
                'passcode' => $passcode
            ]);
            return response()->json(['status' => '1'], 200);
        } else {
            return response()->json(['status' => '0'], 400);
        }
    }

    public function passcodeConf(Request $req)
    {

        $passcode = $req->passcode;
        $email = $req->email;

        $conf = InstansiModel::where('email', $email)->where('passcode', $passcode)->get()->count();
        if ($conf == 0) {
            return response()->json(['status' => '0'], 200);
        } else {
            InstansiModel::where('email', $email)->update([
                'aktif' => '1',
            ]);
        }
    }

    public function cekEmail(Request $req)
    {
        $email = $req->email;
        $cek = InstansiModel::where('email', $email)->get()->count();
        $data = array(
            'link' => 'http://online.tcmskw/reset/' . $email,
        );
        if ($cek > 0) {
            Mail::send('email_reset', $data, function ($mail) use ($email) {
                $mail->to($email, 'no-reply')->subject("Reset Password");
                $mail->from('tcmskw@gmail.com', 'TCM Room');
            });

            if (Mail::failures()) {
                return response()->json(['status' => '0'], 200);
            } else {
                return response()->json(['status' => '1'], 200);
            }
        } else {
            return response()->json(['status' => '0'], 200);
        }
    }

    public function resetPassword(Request $req)
    {
        InstansiModel::where('email', $req->email)->where('passcode', $req->passcode)->update([
            'password' => bcrypt($req->password),
        ]);
        return response()->json(['status' => '1'], 200);
    }

    public function logout()
    {
        Session::flush();
        return response()->json(['status' => '1'], 200);
    }
}
