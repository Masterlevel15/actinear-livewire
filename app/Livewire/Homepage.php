<?php

namespace App\Livewire;

use Livewire\Component;

class Homepage extends Component
{
    public function mount()
    {
        session()->forget('navigation-bar-mount');
    }
    public function render()
    {
        return view('livewire.homepage');
    }
}
