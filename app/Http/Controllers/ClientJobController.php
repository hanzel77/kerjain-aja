<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class ClientJobController extends Controller
{
    public function show(){
        return Inertia::render('Client/ClientCreateJob');
    }

    public function store(Request $request){
        $accessibility = $request->all()['accessibility'];
        
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

        return redirect(route('client-jobs'))
        ->with('data', $request->all())
        ->with('groupedAccessibility', $groupedAccessibility);

    }
}
