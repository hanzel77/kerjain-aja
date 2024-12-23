<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Job_vacancy;


class ClientJobController extends Controller
{
    public function showJobsDetail(string $id){
        $job = Job_vacancy::with('applications.user')->where('id', $id)->first();

        return Inertia::render('Client/ClientJobsDetail')->with([
            'job' => $job,
        ]);
    }

    public function showDashboardPage(){
        $jobs = Job_vacancy::where('user_id', auth()->user()->id)->get();

        return Inertia::render('Client/ClientDashboard')->with([
            'jobs' => $jobs
        ]);
    }

    public function showJobsPage(){
        $jobs = Job_vacancy::where('user_id', auth()->user()->id)->get();

        return Inertia::render('Client/ClientJobs')->with([
            'jobs' => $jobs
        ]);
    }

    public function show(){
        return Inertia::render('Client/ClientCreateJob');
    }

    public function store(Request $request){
        $data = $request->all();

        $accessibility = $data['accessibility'];
                
        $categories = [
            'Vision' => ['partially_blind', 'color_blind', 'low_vision'],
            'Hearing' => ['hard_of_hearing', 'deaf_with_accommodations'],
            'Motor' => ['limited_dexterity', 'arthritis', 'rsi', 'amputee'],
            'Cognitive' => ['dyslexia', 'adhd', 'mild_cognitive_impairment'],
            'Speech' => ['stuttering', 'non_verbal_with_assistive_devices'],
            'Mental Health' => ['anxiety_disorder', 'depression', 'bipolar_disorder'],
            'Other' => ['chronic_pain', 'fatigue', 'multiple_sclerosis_mild', 'parkinsons_disease_early']
        ];

        $groupedAccessibility = [];

        foreach ($accessibility as $item) {
            foreach ($categories as $category => $values) {
                if (in_array($item, $values)) {
                    $groupedAccessibility[$category][] = $item;
                    break;
                }
            }
        }

        Job_vacancy::insert([
            'name' => $data['name'],
            'user_id' => auth()->user()->id,
            'location' => $data['location'],
            'description' => $data['description'],
            'salary' => $data['salary'],
            'type' => strtolower($data['type']),
            'status' => 'open',
            'accessibility' => json_encode($groupedAccessibility),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect(route('client-jobs'));

    }
}
