<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\FacebookPage;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $pages = FacebookPage::whereNull('expired_at')->orderby('id', 'desc')->get()->toArray();

        return Inertia::render('Pages/Index', [
            'pages' => $pages,
            'from' => 1,
            'to' => count($pages),
            'total' => count($pages),
        ]);
    }
}
