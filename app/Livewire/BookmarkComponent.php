<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;

class BookmarkComponent extends Component
{
    public $activity;

    public function mount(Activity $activity)
    {
    
        $this->activity = $activity;
    }

    public function toggleBookmark()
    {
        if(!auth()->check())
        {
            $this->redirect('/register');
            
        }
        else
        {
            $user = auth()->user();
            
            if ($user->bookmarkedActivities()->where('activity_id', $this->activity->id)->exists()) {
                $user->bookmarkedActivities()->detach($this->activity->id);
            } else {
                $user->bookmarkedActivities()->attach($this->activity->id);
            }

            // Refresh the component data
            $this->activity->refresh();
        }
    }

    public function render()
    {
        return view('livewire.bookmark-component');
    }
}
