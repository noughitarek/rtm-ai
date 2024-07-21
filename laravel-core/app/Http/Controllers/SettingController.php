<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\FacebookPage;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Settings/Index', ['settings' => config('settings')]);
    }

    public function redirectToFacebook()
    {
        return Socialite::buildProvider(
            \Laravel\Socialite\Two\FacebookProvider::class,
            config('settings.facebook')
        )->redirect();
    }
    
    public function handleFacebookCallback()
    {
        try {
            $user = Socialite::buildProvider(
                \Laravel\Socialite\Two\FacebookProvider::class,
                config('settings.facebook')
            )->user();
        } catch (\Exception $e) {
            return redirect('/login')->with('error', 'Facebook authentication failed.');
        }
        $fb_user = FacebookPage::where("facebook_page_id", (string)$user->id)->first();
        if(!$fb_user)
        {
            FacebookPage::create(array(
                "facebook_page_id" => (string)$user->id,
                "name" => $user->name,
                "access_token" => $user->token,
                'type' => 'user',
                'expired_at' => null
            ));
        }
        else
        {
            $fb_user->update(array(
                "facebook_page_id" => (string)$user->id,
                "name" => $user->name,
                "access_token" => $user->token,
                'type' => 'user',
                'expired_at' => null
            ));
        }
        
        $pages = FacebookPage::Get_Pages();
        return redirect('/');
    }
}
