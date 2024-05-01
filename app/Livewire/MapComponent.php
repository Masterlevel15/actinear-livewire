<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;

class MapComponent extends Component
{
    public $distance, $activities, $sliderValue, $inputValue, $newDistance, $change, $latitude, $longitude;
    public function getActivitiesByRange()
    {
        $this->activities = Activity::where('distance', '<=', $this->distance)->get();
       return   $this->activities;
    }
    public function mount()
    {
        $this->distance = 50;
        $this->sliderValue = $this->distance;
        $this->getActivitiesByRange();

        if(session()->has('geolocation-offline') && session()->has('geolocation-denied'))
        {
            $geolocation = session('geolocation-offline');

            $this->latitude = $geolocation['latitude'];
            $this->longitude = $geolocation['longitude'];
        }
        
    }
    
    
    public function render()
    {
        return view('livewire.map-component');
    }
    public function handleInputChange()
    {
        $this->distance = intval($this->sliderValue);
        $this->getActivitiesByRange();

        $this->dispatch('sendActivities', ['activities' => $this->activities]);

        return $this->activities;
    }
    
}
