<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScheduleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Các route này được tự động thêm tiền tố /api bởi RouteServiceProvider.
|
| GET  /api/schedules  → ScheduleController@index  (lấy danh sách)
| POST /api/schedules  → ScheduleController@store  (tạo mới)
|--------------------------------------------------------------------------
*/

Route::get('/schedules',  [ScheduleController::class, 'index']);
Route::post('/schedules', [ScheduleController::class, 'store']);
