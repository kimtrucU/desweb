<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScheduleController;

// API routes for schedules
Route::get('/schedules', [ScheduleController::class, 'index']);
Route::post('/schedules', [ScheduleController::class, 'store']);
