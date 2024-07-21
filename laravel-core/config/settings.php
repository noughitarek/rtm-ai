<?php
return [
    "id" => "RTM",
    "title" => "Remarketing Tool for Messages",

    "limits" => [
        'conversations' => 100,
        'message_per_conversation' => 100,
        "max_simultaneous_message" => 10,
    ],
    "minimum_pourcentage" => 10,

    'facebook' => [
        'client_id' => "971771760955448",
        'client_secret' => "4d75da00c126a15152ce508de2ab334b",
        'redirect' => "https://rtm.ecoshark.org/oauth/facebook/callback",
    ],
];
?>