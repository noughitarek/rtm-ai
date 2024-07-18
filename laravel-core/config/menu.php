<?php

return array(
    array(
        "type" => "link",
        "content" => "Tableau de bord",
        "active_when" => ["App\Http\Controllers\DashboardController@index"],
        "route" => "/",
        "icon" => array("type" => "lucide", "content" => "House"),
    ),
    array("type" => "divider"),

    array(
        "type" => "link",
        "content" => "Utilisateurs",
        "active_when" => ["App\Http\Controllers\UserController#"],
        "route" => "/users",
        "icon" => array("type" => "lucide", "content" => "Users"),
    ),
    array(
        "type" => "link",
        "content" => "Paramétres",
        "active_when" => ["App\Http\Controllers\SettingController@index"],
        "section" => "settings",
        "route" => "/settings",
        "icon" => array("type" => "lucide", "content" => "Settings"),
    ),

);