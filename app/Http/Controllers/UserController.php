<?php

namespace App\Http\Controllers;

use App\Models\kullanici;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function show(kullanici $user)
    {
      return Inertia::render('User/Show', [
        'user' => $user->only(
          'name',
        ),
    ]);
    
  //   return Inertia::render('User/Show', [
  //  'user' => $user::all()
  // ]);

    }
}
