<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use App\Models\Page;
use App\Models\Setting;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SubscribeController extends Controller
{


    public function subscribe(Request $request)
    {



            //dd($request->all());
            $request->validate([
                'email' => 'required|email|unique:subscribers,email',
            ]);

            //dd($request->all());
            Subscriber::query()->create(['email' => $request->post('email')]);

            return redirect(route('client.home.index'));

        }


}
