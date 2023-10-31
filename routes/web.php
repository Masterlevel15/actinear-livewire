<?php

use Illuminate\Support\Facades\Route;

use App\Livewire\Counter;
use App\Livewire\MyLivewireComponent;
use App\Livewire\Homepage;
use App\Livewire\GeoLocationComponent;
use App\Livewire\ActivityDetails;
use App\Livewire\ActivitiesByCategory;
use App\Livewire\ActivitiesList;
use App\Livewire\MapComponent;
use App\Livewire\PromoterProfile;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', Homepage::class)->name('homepage');

Route::get('/test', MyLivewireComponent::class);


Route::get('/counter', Counter::class);

Route::get('/activities/category/{categoryId}', ActivitiesByCategory::class)->name('activities-by-category');

Route::get('/activity-details/{id}', ActivityDetails::class)->name('activity-details');

Route::get('/promoter-profile/{promoterId}', PromoterProfile::class)->name('promoter-profile');

Route::get('/map', MapComponent::class)->name('map');

//Laravel jestream vue par défaut
Route::get('/welcome', function () {
    return view('welcome');
})->name('welcome');



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
