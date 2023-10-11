<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $user = ['name' => 'Saliha'];

        return Inertia::render('welcome', ['user' => $user]);
    }
}
