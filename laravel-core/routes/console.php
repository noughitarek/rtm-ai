<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;



Schedule::command('app:assign-remarketings')->everyMinute()->runInBackground();
Schedule::command('app:get-latest-conversations')->everyMinute()->runInBackground();
Schedule::command('app:assign-programs')->everyMinute()->runInBackground();
Schedule::command('app:assign-templates')->everyMinute()->runInBackground();
Schedule::command('app:send-remarketing-messages')->everyMinute()->runInBackground();
Schedule::command('app:reschudle-messages')->everyMinute()->runInBackground();
Schedule::command('app:update-rates')->daily()->runInBackground();
#Schedule::command('app:scrape-conversations')->everyMinute()->runInBackground();