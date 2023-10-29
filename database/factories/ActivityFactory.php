<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => fake()->words(2, true),
            'date' => fake()->dateTimeBetween('-1 week', '+7 month'),
            'term' => fake()->time('H:i'),
            'participants_number' => fake()->numberBetween(0, 100),
            'address' => fake()->streetAddress(),
            'description' => fake()->paragraphs(1, true),
            'distance' => fake()->randomFloat(2, 0, 5000),
            //'latitude' => $this->faker->randomFloat(8, -90, 90),
            //'longitude' => $this->faker->randomFloat(9, -180, 180),
            'image' =>"https://picsum.photos/id/{$this->faker->randomNumber(2, false)}/800/600",
            //'country_id' => $this->faker->randomElement(\App\Models\Country::pluck('id')),
            //'city_id' => $this->faker->randomElement(\App\Models\City::pluck('id')),
            'category_id' => $this->faker->randomElement(\App\Models\Category::pluck('id')),
            'promoter_id' => 
            $this->faker->randomElement(\App\Models\User::pluck('id')),
            'user_id' => 
            $this->faker->randomElement(\App\Models\User::pluck('id')),
        ];
    }
}
