<?php

namespace App\Livewire;

use Livewire\Component;

class ActivityCard extends Component
{
    public $activity;
    public function mount($activity)
    {
        $this->activity = $activity;
    }
    public function render()
    {
        return view('livewire.activity-card');
    }
}
