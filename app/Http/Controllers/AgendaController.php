<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\AgendaModel;
use App\FasilitasModel;
use App\FasiltasModel;
use Carbon\CarbonPeriod;
use App\InstansiModel;
use App\OperatorModel;
use App\ShowModel;
use App\SyaratModel;
use Illuminate\Support\Facades\DB;

class AgendaController extends Controller{

    public function showAgendaById(Request $req){

        $agenda = AgendaModel::where('id_user', $req->id)->orderBy('id', 'DESC')->get();
        return response()->json(['data' => $agenda], 200);

    }

    public function createAgenda(Request $req){

        $file = $req->file('pdf_file');
        $folder = 'Surat_Pengantar';
        $nama_file = time()."_".$file->getClientOriginalName();
        $id_instansi = $req->id_user;
        
        if($file->move($folder,$nama_file)){
            AgendaModel::create([
                'id_user' => $id_instansi,
                'nama_kegiatan' => $req->nama_kegiatan,
                'jumlah_peserta' => $req->jumlah_peserta,
                'tanggal_mulai' => $req->tanggal_mulai,
                'tanggal_selesai' => $req->tanggal_selesai,
                'jam_mulai' => $req->jam_mulai,
                'jam_selesai' => $req->jam_selesai,
                'pdf_file' => $nama_file,
                'fasilitas' => $req->fasilitas,
                'catatan' => $req->catatan,
                'status' => '0',
                'catatan_konfirmasi' => 'Permintaan anda belum ditinjau Operator'
            ]);
            $dinas = InstansiModel::where('id', $id_instansi)->get()->last();
            $this->sendNotifToOp($dinas->nama);
            return response()->json(['status' => '1']);
        }else{
            return response()->json(['status' => '0']);
        }
    }


    public function sendNotifToOp($nama){
        $op = OperatorModel::all();
        $countOp = count($op);
        for($i=0;$i<$countOp;$i++){
            $sendEmail = $this->sendEmail($op[$i]->email, $op[$i]->nama, $nama,'Operator_Notif_dinas', 'Pendaftaran Operator');
        }
    }
    

    public function getFasilitas(){
        $data = FasilitasModel::all();
        return response()->json(['data' => $data]);
    }

    public function addFasilitas(Request $req){
        FasilitasModel::create([
            'value' => $req->fasilitas,
            'label' => $req->fasilitas
        ]);
        return response()->json(['status' => '1']);
    }

    public function  delFasilitas(Request $req){
        $delete = FasilitasModel::find($req->id)->delete();
        return response()->json(['status' => '1']);
    }

    //=================================================== Show Section =================================================//

    public function dashboard(Request $req){

        $bulanini = date('m');

        $data = ShowModel::where(DB::raw('MONTH(tanggal)'), $bulanini)->orderby('tanggal', 'ASC')->get();
        return response()->json(['data' => $data]);

    }

    public function showTv(){
        $bulanini = date('W');

        $data = ShowModel::where(DB::raw('WEEKOFYEAR(tanggal)'), $bulanini)->orderby('tanggal', 'ASC')->get();
        return response()->json(['data' => $data]);
    }

    //=================================================== Admin Section ================================================//

    public function getAgendaSetuju(){
        //$agenda = AgendaModel::where('status', '0')->orderBy('id', 'DESC')->get();

        $data = DB::table('table_agenda')
                ->join('table_instansi', 'table_instansi.id', '=', 'table_agenda.id_user')
                ->select('table_agenda.*', 'table_instansi.nama')
                ->get();
        return response()->json(['data' => $data], 200);
    }


    public function getAgendaPending(){
        //$agenda = AgendaModel::where('status', '0')->orderBy('id', 'DESC')->get();

        $data = DB::table('table_agenda')
                ->join('table_instansi', 'table_instansi.id', '=', 'table_agenda.id_user')
                ->select('table_agenda.*', 'table_instansi.nama')
                ->where('table_agenda.status', '=', '0')
                ->get();
        return response()->json(['data' => $data], 200);
    }

    public function detailAgenda(Request $req){

        $data = DB::table('table_agenda')
        ->join('table_instansi', 'table_instansi.id', '=', 'table_agenda.id_user')
        ->where('table_agenda.id', '=', $req->id)
        ->select('table_agenda.*', 'table_instansi.nama')
        ->get()
        ->last();

        return response()->json(['data' => $data]);

    }

    public function tidakDisetujui(Request $req){
        AgendaModel::where('id', $req->id)->update([
            'status' => '2',
            'catatan_konfirmasi' => $req->catatan
        ]);
        $data = DB::table('table_agenda')
        ->join('table_instansi', 'table_instansi.id', '=', 'table_agenda.id_user')
        ->where('table_agenda.id', '=', $req->id)
        ->select('table_agenda.*', 'table_instansi.nama', 'table_instansi.email')
        ->get()
        ->last();

        $email = $data->email;
        $data_kirim = array(
            'nama' => $data->nama,
            'nama_kegiatan' => $data->nama_kegiatan,
            'tanggal_mulai' => $data->tanggal_mulai,
            'tanggal_selesai' => $data->tanggal_selesai,
            'status' => $data->status,
            'catatan_op' => $data->catatan_konfirmasi
        );


        Mail::send('Email_verifikasi', $data_kirim, function ($mail) use ($email) {
            $mail->to($email, 'no-reply')->subject("TCM Room Email Sys");
            $mail->from('tcmskw@gmail.com', 'TCM Room');
        });

        return response()->json(['status' => '1', 'data' => $data]);
    }

    public function inputToShowTable(Request $req){

        AgendaModel::where('id', $req->id)->update([
            'status' => '1',
            'catatan_konfirmasi' => $req->catatan
        ]);

        $data = DB::table('table_agenda')
        ->join('table_instansi', 'table_instansi.id', '=', 'table_agenda.id_user')
        ->where('table_agenda.id', '=', $req->id)
        ->select('table_agenda.*', 'table_instansi.nama', 'table_instansi.email', 'table_instansi.no_hp')
        ->get()
        ->last();

        $email = $data->email;
        $data_kirim = array(
            'nama' => $data->nama,
            'nama_kegiatan' => $data->nama_kegiatan,
            'tanggal_mulai' => $data->tanggal_mulai,
            'tanggal_selesai' => $data->tanggal_selesai,
            'status' => $data->status,
            'catatan_op' => $data->catatan_konfirmasi
        );


        Mail::send('Email_verifikasi', $data_kirim, function ($mail) use ($email) {
            $mail->to($email, 'no-reply')->subject("TCM Room Email Sys");
            $mail->from('tcmskw@gmail.com', 'TCM Room');
        });


        $tanggal = CarbonPeriod::create($data->tanggal_mulai, $data->tanggal_selesai);
        $dates = $tanggal->toArray();
        $length = count($dates);
        for($i=0;$i<$length;$i++){
            ShowModel::create([
                'instansi' => $data->nama,
                'nama_kegiatan' => $data->nama_kegiatan,
                'tanggal' => $dates[$i]->format('yy-m-d'),
                'jam_mulai' => $data->jam_mulai,
                'jam_selesai' => $data->jam_selesai
            ]);
        }

        return response()->json(['status' => '1', 'data' => $data], 200);
    }

    public function getSyarat(){
        $data = SyaratModel::where('id', '1')->get()->last();
        return response()->json(['data' => $data]);
    }

    public function updateSyarat(Request $req){
        SyaratModel::where('id', '1')->update([
            'syarat' => $req->syarat
        ]);

        return response()->json(['status' =>'1']);
    }

    // ======================================= OPERATOR SECTION =====================================??

    public function getOperator(){
        $data = OperatorModel::all();
        return response()->json(['data' => $data]);
    }

    public function addOperator(Request $req){

        OperatorModel::create([
            'nama' => $req->nama,
            'email' => $req->email,
            'password' => bcrypt($req->password)
        ]);

        $sendEmail = $this->sendEmail($req->email, $req->nama, '','Operator_Notification', 'Pendaftaran Operator');
        
        return response()->json(['status' => '1']);
    }

    public function delOperator(Request $req){
        OperatorModel::find($req->id)->delete();
        return response()->json(['status' => '1']);
    }

    // ===================================== INSTANSI SECTION  ====================================== //


    public function getInstansi(){
        $data = InstansiModel::all();
        return response()->json(['data' => $data]);
    }

    public function aktifOrBlock(Request $req){
        $id = $req->id;
        $status = $req->val;

        // 1 aktif, 2 blokir

        InstansiModel::where('id', $id)->update([
            'aktif' => $status
        ]);

        return response()->json(['status' => '1']);
    }

    // ===================================== SEND EMAIL ==========================================//

    public function sendEmail($email_add, $nama ,$dinas,$email_for, $judul)
    {
        $data = array(
            'nama' => $nama,
            'dinas' => $dinas
        );

        $judulEmail = $judul;
        //$sendEmail = $this->sendEmail($op[$i]->email, $op[$i]->nama, $nama,'Operator_Notif_dinas', 'Pendaftaran Operator');

        Mail::send($email_for, $data, function ($mail) use ($email_add) {
            $mail->to($email_add, 'no-reply')->subject("TCM Room Email Sys");
            $mail->from('tcmskw@gmail.com', 'TCM Room');
        });

        if (Mail::failures()) {
            return '0';
        } else {
            return '1';
        }
    }


}