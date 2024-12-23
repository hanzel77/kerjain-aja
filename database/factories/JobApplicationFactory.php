<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Job_application;
use App\Models\Job_vacancy;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class JobApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Job_application::class;

    public function definition(): array
    {

        return [
            'job_id' => Job_vacancy::factory(),
            'user_id' => User::factory()->state(function (array $attributes) {
                return ['role' => 'worker'];
            }),
            'status' => $this->faker->randomElement(['applied', 'interviewed', 'hired', 'rejected']),
            'cv_path' => $this->faker->optional()->filePath(),
            'resume_path' => $this->faker->optional()->filePath(),
            'description' => $this->faker->optional()->paragraph,
        ];
    }
}
