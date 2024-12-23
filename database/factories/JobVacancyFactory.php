<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Job_vacancy;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class JobVacancyFactory extends Factory
{
    protected $model = Job_vacancy::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

         $accessibilityOptions = [
            ['value' => 'partially_blind', 'category' => 'Vision'],
            ['value' => 'color_blind', 'category' => 'Vision'],
            ['value' => 'low_vision', 'category' => 'Vision'],
            ['value' => 'hard_of_hearing', 'category' => 'Hearing'],
            ['value' => 'deaf_with_accommodations', 'category' => 'Hearing'],
            ['value' => 'limited_dexterity', 'category' => 'Motor'],
            ['value' => 'arthritis', 'category' => 'Motor'],
            ['value' => 'rsi', 'category' => 'Motor'],
            ['value' => 'amputee', 'category' => 'Motor'],
            ['value' => 'dyslexia', 'category' => 'Cognitive'],
            ['value' => 'adhd', 'category' => 'Cognitive'],
            ['value' => 'mild_cognitive_impairment', 'category' => 'Cognitive'],
            ['value' => 'stuttering', 'category' => 'Speech'],
            ['value' => 'non_verbal_with_assistive_devices', 'category' => 'Speech'],
            ['value' => 'anxiety_disorder', 'category' => 'Mental Health'],
            ['value' => 'depression', 'category' => 'Mental Health'],
            ['value' => 'bipolar_disorder', 'category' => 'Mental Health'],
            ['value' => 'chronic_pain', 'category' => 'Other'],
            ['value' => 'fatigue', 'category' => 'Other'],
            ['value' => 'multiple_sclerosis_mild', 'category' => 'Other'],
            ['value' => 'parkinsons_disease_early', 'category' => 'Other'],
        ];

        $grouped = collect($accessibilityOptions)->groupBy('category');

        $selected = $grouped->map(function ($items) {
            $maxSelectable = min(3, $items->count()); 
            return $items->random(rand(1, $maxSelectable))->pluck('value')->toArray();
        });

        return [
            'user_id' => User::factory()->state(function (array $attributes) {
                return ['role' => 'client'];
            }),
            'name' => $this->faker->jobTitle,
            'location' => $this->faker->city,
            'salary' => $this->faker->numberBetween(2000000, 30000000),
            'type' => $this->faker->randomElement(['full-time', 'part-time', 'intern']),
            'description' => $this->faker->paragraph,
            'accessibility' => $selected->toJson(),
            'status' => $this->faker->randomElement(['open', 'closed']),
        ];
    }
}
