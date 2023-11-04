<?php

namespace App\Livewire;

use Livewire\Component;

class ToggleButton extends Component
{
    public $content, $classActive, $isActive = false, $class, $toggleButtonId;

    public function mount()
    {
    
      //$this->classActive = "{{ " .$classActive. " }}";
    }
    public function toggleButton()
    {
        $this->isActive = !$this->isActive;
    }
    public function render()
    {
        return view('livewire.toggle-button');
    }
}
