<?php

use Inertia\Inertia;
use App\Http\Middleware\CheckClient;
use App\Http\Middleware\CheckWorker;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\JobController;
use App\Http\Controllers\WorkerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClientJobController;

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



// Worker
Route::middleware(['auth', CheckWorker::class])->group(function (){

    Route::get('/applications',[WorkerController::class, 'showApplicationsPage'])->name('applications');

    Route::get('/explore', [WorkerController::class, 'showExplorePage'])->name('explore');

    Route::get('/job-detail/{id}', [JobController::class, 'show']);

    Route::get('/worker/apply/{id}', [WorkerController::class, 'showApplyPage']);

    Route::post('/worker/apply/{job_id}', [WorkerController::class, 'apply'])->name('apply');


});

// Client
Route::get('/client', function () {
    return Inertia::render('Client/ClientHome');
})->name('client-home');

Route::middleware(['auth', CheckClient::class])->group(function () {
    Route::get('/client/dashboard', [ClientJobController::class, 'showDashboardPage'])->name('client-dashboard');

    Route::get('/client/jobs', [ClientJobController::class, 'showJobsPage'])->name('client-jobs');

    Route::get('/jobs/create',[ClientJobController::class, 'show'])->name('client-create-job');

    Route::post('/jobs/create', [ClientJobController::class, 'store'])->name('jobs.store');

    Route::get('/client/jobs/{id}', [ClientJobController::class, 'showJobsDetail'])->name('client-jobs-detail');

    Route::put('/client/jobs/{job_id}/applications/{id}', [ClientJobController::class, 'handleStatus'])->name('handle-status');

    Route::put('/client/jobs/{job_id}', [ClientJobController::class, 'handleJobStatus'])->name('handle-job-status');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
