<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// ログイン用ルート
Route::post('/login', [LoginController::class, 'login']);

// 認証済みユーザー情報取得（任意）
Route::get('/api/user', function () {
    return auth()->user();
})->middleware('auth');
