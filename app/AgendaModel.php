<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AgendaModel extends Model
{
    protected $table = "table_agenda";
    protected $fillable = ['id_user','nama_kegiatan', 'jumlah_peserta','tanggal_mulai', 'tanggal_selesai', 'jam_mulai','jam_selesai', 'pdf_file','fasilitas', 'catatan', 'status', 'catatan_konfirmasi'];
}
