<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InstansiModel extends Model
{
    protected $table = "table_instansi";
    protected $fillable = ['nama', 'no_hp', 'email', 'passcode','username', 'password', 'aktif'];
}
