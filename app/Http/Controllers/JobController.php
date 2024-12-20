<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class JobController extends Controller
{
    public function show(string $id)
    {
        return Inertia::render('Worker/JobDetail', ['id' => $id]);
    }
}
