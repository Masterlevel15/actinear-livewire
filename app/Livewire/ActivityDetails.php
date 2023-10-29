<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;

class ActivityDetails extends Component
{
    public $suggestion, $selectedActivity;
    public $id;
    public $distance;
    

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
    }
    public function show()
    {
        
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
