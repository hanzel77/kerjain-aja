<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Job_vacancy;

class JobController extends Controller
{
    public function show(string $id){
        $data = Job_vacancy::with('user')->where('id', $id)->first();

        return Inertia::render('Worker/JobDetail', ['data' => $data]);
    }

    public function store(){
        
    }
}
