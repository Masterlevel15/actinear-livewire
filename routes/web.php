<?php

use Illuminate\Support\Facades\Route;

use App\Livewire\Counter;
use App\Livewire\MyLivewireComponent;
use App\Livewire\Homepage;
use App\Livewire\GeoLocationComponent;
use App\Livewire\ActivityDetails;
use App\Livewire\ActivitiesByCategory;
use App\Livewire\ActivitiesBook;
use App\Livewire\ActivityForm;
use App\Livewire\ActivitiesList;
use App\Livewire\MapComponent;
use App\Livewire\PromoterProfile;
use App\Livewire\FilterComponent;
use App\Livewire\TestComponent;
use App\Livewire\FileUploadComponent;


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

//Homepage
Route::get('/', Homepage::class)->name('homepage');

Route::get('/test', FileUploadComponent::class);

Route::get('/counter', Counter::class);

//Filtre
Route::get('/filter', FilterComponent::class)->name('filter');

//Activités par catégorie
Route::get('/activities/category/{categoryId}', ActivitiesByCategory::class)->name('activities-by-category');

//Activités  Book par l'utilisateur
Route::get('/activities/book/{userId?}', ActivitiesBook::class)->name('activities-book');

//Détails activité
Route::get('/activity-details/{id}', ActivityDetails::class)->name('activity-details');

//Ajout activité
Route::get('/activity/create', ActivityForm::class)->name('activity-create');

//Profil organisateur
Route::get('/promoter-profile/{promoterId}', PromoterProfile::class)->name('promoter-profile');

//Carte
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
