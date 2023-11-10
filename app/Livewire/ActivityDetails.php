<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;

class ActivityDetails extends Component
{
    public $suggestion, $selectedActivity;
    public $id;
    public $distance;
    public $imageUrl;
    

    public function getActivityFromSearch()
    {
        $this->suggestion = app(SearchBarComponent::class)->selectedActivity;
    
        
    }
    public function activitySelected($activity)
    {
        // Réagissez à l'événement et utilisez la valeur de l'activité
        $this->selectedActivity = $activity;
    }
    public function mount($id)
    {
        $this->id = $id;
        $this->selectedActivity =  Activity::with('promoter', 'category', 'country', 'city')->find($id);
        $this->getImage();
    }
    public function getImage()
    {
        $image = $this->selectedActivity->image; // Supposons que c'est ainsi que vous accédez à votre champ image

        // Vérifier si l'image contient un chemin complet (une URL)
        if (preg_match('/^https?:\/\//', $image)) {
            // C'est une URL, vous pouvez l'utiliser directement dans la balise <img>
            $this->imageUrl = $image;
        } else {
            // C'est un nom de fichier, vous devez construire le chemin
            // En supposant que vos images sont stockées dans le répertoire 'storage/app/public/images'
            $this->imageUrl = asset('images/' . $image);
        }
    }

    public function toggleBookmark(Activity $activity)
    {
        $user = auth()->user();
        
        if ($user->bookmarkedActivities()->where('activity_id', $activity->id)->exists()) {
            $user->bookmarkedActivities()->detach($activity->id);
        } else {
            $user->bookmarkedActivities()->attach($activity->id);
        }

        return back();
    }

    public function render()
    {
        return view('livewire.activity-details', ['activity' => $this->suggestion]);
    }
}
