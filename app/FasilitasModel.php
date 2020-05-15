<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FasilitasModel extends Model
{
    protected $table = "table_fasilitas";
    protected $fillable = ['value', 'label']; 
}
