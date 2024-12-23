<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Job_vacancy;
use App\Models\Job_application;

class JobController extends Controller
{
    public function show(string $id){
        $data = Job_vacancy::with('user')->where('id', $id)->first();

        $hasApplied = Job_application::where('user_id', auth()->user()->id)->where('job_id', $id)->exists();


        return Inertia::render('Worker/JobDetail', ['data' => $data, 'hasApplied' => $hasApplied]);
    }

    public function store(){
        
    }
}
