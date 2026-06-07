<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ScheduleController extends Controller
{
    /**
     * GET /api/schedules
     * Lấy toàn bộ danh sách lịch trình từ bảng schedules.
     */
    public function index(): JsonResponse
    {
        $schedules = Schedule::all();

        return response()->json($schedules, 200);
    }

    /**
     * POST /api/schedules
     * Validate dữ liệu đầu vào, sau đó tạo mới một lịch trình.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title'      => 'required|string|max:255',
            'start_time' => 'required|date',
            'end_time'   => 'required|date|after:start_time',
            'status'     => 'nullable|string|max:50',
        ]);

        $schedule = Schedule::create($validated);

        return response()->json([
            'message'  => 'Lịch trình đã được tạo thành công.',
            'schedule' => $schedule,
        ], 201);
    }
    {
        $validated = $request->validate([
            'title'      => 'required|string|max:255',
            'start_time' => 'required|date',
            'end_time'   => 'required|date|after:start_time',
            'status'     => 'nullable|string|max:50',
        ]);

        $schedule = Schedule::create($validated);

        return response()->json([
            'message'  => 'Lịch trình đã được tạo thành công.',
            'schedule' => $schedule,
        ], 201);
    }
    {
        $validated = $request->validate([
            'title'      => 'required|string|max:255',
            'start_time' => 'required|date',
            'end_time'   => 'required|date|after:start_time',
            'status'     => 'nullable|string|max:50',
        ]);

        $schedule = Schedule::create($validated);

        return response()->json([
            'message'  => 'Lịch trình đã được tạo thành công.',
            'schedule' => $schedule,
        ], 201);
    }
}
