<?php

namespace App\Livewire;

use Livewire\Component;

class Header extends Component
{
    #[Reactive] 
    public $latitude;
    public $longitude; 

    public function mount()
    {
        //dd($this->longitude, $this->latitude);
    }
    public function render()
    {
        return view('livewire.header');
    }
}
