<?php

namespace App\Livewire;

use Livewire\Component;

class RangeSlider extends Component
{
    public $distance, $sliderValue, $sliderStyle = "";
    public function mount()
    {
        $this->distance = 50;
        $this->sliderValue = $this->distance;
        $this->handleInputChange();
        
    }
    public function handleInputChange()
    {
        $this->distance = intval($this->sliderValue);

        $percentage = ceil(($this->sliderValue - 1) / (100 - 1) * 100);
        $notFill = ceil(100 - $percentage);
        $this->sliderStyle = "linear-gradient(to right, #14BA8F ${percentage}%, #d3d3d3 ${notFill}%) !important";
        
        $this->dispatch('post-created', title: 'hjvjvhvjhvjhv')->to(FilterComponent::class);
        //$this->dispatch('sliderValueChanged', distance: $this->distance);

    }
    public function render()
    {
        return view('livewire.range-slider');
    }
}
