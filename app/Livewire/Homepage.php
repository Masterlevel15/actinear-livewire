<?php

namespace App\Livewire;

use Livewire\Component;

class Homepage extends Component
{
    public function mount()
    {
       session_start();
        if(isset($_SESSION['ActivitiesByCategory']))
        {
            unset($_SESSION['ActivitiesByCategory']);      
        }
    }
    public function render()
    {
        return view('livewire.homepage');
    }
}
