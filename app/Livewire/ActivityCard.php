<?php

namespace App\Livewire;

use Livewire\Component;

class ActivityCard extends Component
{
    public $activity, $activities;

    public function mount()
    {
        //$this->activity = $activity;
    }
    public function render()
    {
        return view('livewire.activity-card');
    }
}
