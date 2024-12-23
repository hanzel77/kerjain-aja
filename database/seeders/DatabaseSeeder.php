<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Job_application;
use App\Models\Job_vacancy;
use Faker\Factory as Faker;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        $worker = User::create([
            'name' => 'Worker',
            'email' => 'worker@gmail.com',
            'password' => Hash::make('12345678'),
            'role' => 'worker',
        ]);

        $client = User::create([
            'name' => 'Client',
            'email' => 'client@gmail.com',
            'password' => Hash::make('12345678'),
            'role' => 'client',
        ]);

        Job_application::factory(5)->create([
            'user_id' => $worker->id,
            'status' => 'applied',
        ]);

        Job_vacancy::factory(5)->create([
            'user_id' => $client->id,
            'status' => 'open',
        ]);

         for ($i = 1; $i <= 50; $i++) {
            $randomWorker = User::factory()->create([
                'name' => "Worker $i",
                'email' => "worker$i@gmail.com",
                'password' => Hash::make('12345678'),
                'role' => 'worker',
            ]);
            
            Job_application::factory(rand(2, 4))->create([
                'user_id' => $randomWorker->id,
                'status' => $faker->randomElement(['applied', 'interviewed', 'hired', 'rejected']),
            ]);
        }

        for ($i = 1; $i <= 50; $i++) {
            $randomClient = User::factory()->create([
                'name' => "Client $i",
                'email' => "client$i@gmail.com",
                'password' => Hash::make('12345678'),
                'role' => 'client',
            ]);
            
            Job_vacancy::factory(rand(2, 4))->create([
                'user_id' => $randomClient->id,
                'status' => $faker->randomElement(['open', 'closed']),
            ]);
        }

        User::factory(20)->create()->each(function ($user) {
            if ($user->role === 'client') {
                Job_vacancy::factory(rand(1, 3))->create([
                    'user_id' => $user->id,
                ]);
            } elseif ($user->role === 'worker') {
                Job_application::factory(rand(1, 3))->create([
                    'user_id' => $user->id,
                ]);
            }
        });

        
    }
}
