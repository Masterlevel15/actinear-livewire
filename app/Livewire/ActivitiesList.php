<?php

namespace App\Livewire;

use Livewire\Component;


class ActivitiesList extends Component
{
    public $activities;
    public function mount($activities)
    {
        $this->activities = $activities;
    }
    public function render()
    {
        return view('livewire.activities-list');
    }
}
