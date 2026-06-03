<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    /**
     * Tên bảng liên kết trong database.
     */
    protected $table = 'schedules';

    /**
     * Tắt tự động cập nhật created_at / updated_at.
     * Bảng chỉ có cột created_at được tạo thủ công.
     */
    public $timestamps = false;

    /**
     * Các trường được phép gán dữ liệu hàng loạt (mass assignment).
     */
    protected $fillable = [
        'title',
        'start_time',
        'end_time',
        'status',
    ];
}
