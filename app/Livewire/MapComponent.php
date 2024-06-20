<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\On;
use App\Models\Activity;
use Carbon\Carbon;

class MapComponent extends Component
{ 
    public $distance, $activities = [], $sliderValue, $inputValue, $newDistance, $change, $latitude, $longitude, $activityDistance, $activitiesSortByRange = [], $positionFound = false;

    private function radians(float $degrees): float
    {   
    return $degrees * pi() / 180;
    }

    private function distanceBetweenCoordinates(Array $coords1, Array $coords2) {
        $this->activityDistance = ACOS(SIN(self::radians($coords1['latitude']))*SIN(self::radians($coords2['latitude']))+COS(self::radians($coords1['latitude']))*COS(self::radians($coords2['latitude']))*COS(self::radians($coords1['longitude'] - $coords2['longitude'])))*6371;

        return $this->activityDistance;
    }
    /*
    #[On('coords-retrieved')] 
    public function getCoords($latitude, $longitude)
    {
        $this->positionFound = true;
        $this->latitude = $latitude;
        $this->longitude = $longitude;
        $this->distance = 50;
        $this->getActivitiesByRange();
        
    }
    */
    public function getActivitiesByRange()
    {
        /*
        $this->currentDate = Carbon::now();
        $this->activities = Activity::with('promoter', 'category', 'country', 'city')->whereDate('date', '>=', 2023)
            ->get();
        
        $activitiesSortByRange = [];
        foreach($this->activities  as $activity) {
            $latitudeFromDB =  $activity->latitude;
            $longitudeFromDB =  $activity->longitude;

            self::distanceBetweenCoordinates(['latitude' => $this->latitude, 'longitude' => $this->longitude], ['latitude' => $latitudeFromDB,'longitude' => $longitudeFromDB]);
        
            if($this->activityDistance < $this->distance) {
                array_push($activitiesSortByRange, $activity);
            }
        }
        $this->activities = collect($activitiesSortByRange);
       
        //$this->activities = Activity::where('distance', '<=', $this->distance)->get();

       return   $this->activities;
       */
       
      $activitiesWithDistance = collect(session('activitiesWithDistance'));
      $distance = $this->distance;
      $this->activities = $activitiesWithDistance->where('distance', '<=', $this->distance);
      
      return   $this->activities;
      
      

    }
    
    public function mount()
    {
        session_start();
        if(isset($_SESSION['ActivitiesByCategory']))
        {
            $this->latitude = session('geolocation-online')['latitude'];
            $this->longitude = session('geolocation-online')['longitude'];

            $activities = $_SESSION['ActivitiesByCategory'];
            //dd($this->activities);
            //dd($this->activities->sortByDesc('distance')->first()->distance);
            
            $this->distance  = number_format($activities->sortByDesc('distance')->first()->distance, 0);
            //dd($activities);
            $this->activities  = $activities;

           
        }
        else
        {
            $this->distance = 50;
            $this->getActivitiesByRange();
        }
        $this->sliderValue = $this->distance;

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
