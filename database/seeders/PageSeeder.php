<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Page::truncate();
        // Pages array
        $pages = [
            [
                'key' => 'home'
            ],
            [
                'key' => 'about'
            ],
            [
                'key' => 'contact'
            ],
            [
                'key' => 'products'
            ],
            [
                'key' => 'team'
            ],
            [
                'key' => 'gallery'
            ],
            [
                'key' => 'service'
            ],
            [
                'key' => 'partner'
            ]
        ];

        // Insert Pages
        Page::insert($pages);
    }
}
