<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job_vacancy;
use App\Models\Job_application;
use Inertia\Inertia;


class WorkerController extends Controller
{
    public function showExplorePage(){

    $jobs = Job_vacancy::with('user')->inRandomOrder()->get();

        return Inertia::render('Worker/Explore')->with([
            'jobs' => $jobs
        ]);
    }

    public function showApplyPage($id){
        return Inertia::render('Worker/Apply')->with([
            'id' => $id
        ]);
    }

    public function apply(Request $request, $id){        

        $request->validate([
            'cv' => 'required|mimes:pdf,doc,docx|max:2048',  
            'resume' => 'required|mimes:pdf,doc,docx|max:2048',
        ]);

        $cvPath = $request->file('cv')->store('cvs', 'public'); 
        $resumePath = $request->file('resume')->store('resumes', 'public');

        Job_application::insert([
            'job_id' => $id,
            'user_id' => auth()->user()->id,
            'status' => 'applied',
            'description' => $request->description,
            'cv_path' => $cvPath,
            'resume_path' => $resumePath,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return redirect()->route('applications');
    }

    public function showApplicationsPage(){
        $applications = Job_application::with('job_vacancy.user')->where('user_id', auth()->user()->id)->get();

        return Inertia::render('Worker/Applications')->with([
            'applications' => $applications
        ]);
    } 
}
