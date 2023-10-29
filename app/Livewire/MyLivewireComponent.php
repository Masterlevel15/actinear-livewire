<?php

namespace App\Livewire;

use Livewire\Component;

class MyLivewireComponent extends Component
{
    // Dans votre composant Livewire (par exemple, MyLivewireComponent.php)
    public function test()
    {
        return 4;
    }

    public function render()
    {
        return view('livewire.my-livewire-component');
    }
}