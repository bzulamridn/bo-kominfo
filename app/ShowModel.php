<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShowModel extends Model {
    protected $table = "table_show";
    protected $fillable = ['instansi', 'nama_kegiatan', 'tanggal', 'jam_mulai','jam_selesai'];
}
