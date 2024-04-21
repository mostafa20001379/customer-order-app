<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) {
            $order = Order::create([
                'customer_name' => $faker->name,
                'address' => $faker->address,
                'order_date' => $faker->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
            ]);

            $this->seedOrderItems($order);
        }
    }

    private function seedOrderItems($order)
    {
        $faker = Faker::create();
        $numItems = $faker->numberBetween(1, 5);

        for ($i = 0; $i < $numItems; $i++) {
            $order->items()->create([
                'product_name' => $faker->word,
                'quantity' => $faker->numberBetween(1, 10),
                'price_per_unit' => $faker->randomFloat(2, 1, 100),
            ]);
        }
    }
}
