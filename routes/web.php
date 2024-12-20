<?php

use Inertia\Inertia;
use App\Http\Middleware\CheckClient;
use App\Http\Middleware\CheckWorker;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/explore', function(){
    return Inertia::render('Worker/Explore');
})->name('explore');

Route::get('/job-detail/{id}', [JobController::class, 'show']);

// Worker
Route::middleware(['auth', CheckWorker::class])->group(function (){

    Route::get('/applications', function(){
        return Inertia::render('Worker/Applications');
    })->name('applications');

    Route::get('/bookmarks', function(){
        return Inertia::render('Worker/Bookmarks');
    })->name('bookmarks');
});

// Client
Route::get('/client', function () {
    return Inertia::render('Client/ClientHome');
})->name('client-home');

Route::middleware(['auth', CheckClient::class])->group(function () {
    Route::get('/client/dashboard', function () {
        return Inertia::render('Client/ClientDashboard');
    })->name('client-dashboard');

    Route::get('/client/explore', function () {
        return Inertia::render('Client/ClientExplore');
    })->name('client-explore');

    Route::get('/client/jobs', function () {
        return Inertia::render('Client/ClientJobs');
    })->name('client-jobs');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
