<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\FacebookPage;
use Illuminate\Http\Request;
use App\Models\FacebookConversation;

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

    public function conversations(FacebookPage $page)
    {
        $conversations = FacebookConversation::with('page')->where('facebook_page_id', $page->facebook_page_id)->orderBy('ended_at', 'desc')->take(100)->get();

        print_r($conversations->toArray());
        exit;
        return Inertia::render('Pages/Conversations', [
            'conversations' => $conversations,
            'from' => 1,
            'to' => count($conversations),
            'total' => count($conversations),
        ]);
    }

    public function assignments(FacebookPage $page, FacebookConversation $conversation)
    {
        $conversation = FacebookConversation::find($conversation->id);

        return Inertia::render('Pages/Assignments', [
            'conversations' => $conversations,
            'from' => 1,
            'to' => count($conversations),
            'total' => count($conversations),
        ]);
    }
}
