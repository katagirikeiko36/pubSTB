<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Todo/Index', []);
    }
}
