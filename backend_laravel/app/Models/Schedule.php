<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $table = 'schedules';
    public $timestamps = false;
    protected $fillable = ['title', 'start_time', 'end_time', 'status'];
}
