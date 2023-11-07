<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\User;

class ActivitiesBook extends Component
{
    public $activitiesBook;

    public function mount()
    {
        if(auth()->check()){
            $this->activitiesBook = auth()->user()->bookmarkedActivities()->get();
        }
        else
        {
            $this->redirect('/register'); 
        }
    }
    public function render()
    {
        return view('livewire.activities-book');
    }
}
