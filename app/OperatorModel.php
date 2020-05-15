<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OperatorModel extends Model {
    protected $table = "table_operator";
    protected $fillable = ['nama', 'email', 'password'];
}
