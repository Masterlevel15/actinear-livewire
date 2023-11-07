<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;
use Illuminate\Support\Facades\Session;

class ActivityComponent extends Component
{
    #[Reactive] 
    public $latitude;
    public $longitude, $distance;
    public $sortedActivities = [];
    public $activities;
    public $sortedActivitiesByDate, $sortedActivitiesByDistance, $sortedActivitiesByFilter;
    public $isByDistance = true, $isByDate = true, $isByFilter = false;

    private function radians(float $degrees): float
    {   
    return $degrees * pi() / 180;
    }

    private function distanceBetweenCoordinates(Array $coords1, Array $coords2) {
        $this->distance = ACOS(SIN(self::radians($coords1['latitude']))*SIN(self::radians($coords2['latitude']))+COS(self::radians($coords1['latitude']))*COS(self::radians($coords2['latitude']))*COS(self::radians($coords1['longitude'] - $coords2['longitude'])))*6371;

        return $this->distance;
    }
    public function sortActivitiesWithDistances(float $lat, float $long)
    {
        $distance = 300;
        if($distance === null ){
            $distance = 200;
        }
        else{
            $distance = 150;
        }

        $activities = $this->activities;
        
        $activitiesSortByRange = [];
        foreach($activities as $activity) {
            $latitudeFromDB =  $activity->latitude;
            $longitudeFromDB =  $activity->longitude;

            self::distanceBetweenCoordinates(['latitude' => $lat, 'longitude' => $long], ['latitude' => $latitudeFromDB,'longitude' => $longitudeFromDB]);

            $activity->distance = $this->distance;
            $activity->save();
            if($activity->distance < $distance) {
                array_push($activitiesSortByRange, $activity);
            }
        }

        $this->sortedActivities = collect($activitiesSortByRange)->sortBy('distance');


        return  $this->sortedActivities;  
               
    }

    public function getActivitiesSortByRange()
    {
        return  $this->sortedActivities; 
    }
    public function sortActivitiesByDate()
    {
       $this->sortedActivitiesByDate = Activity::with('promoter', 'category', 'country', 'city')->whereYear('date', '>=', 2023)->orderBy('date', 'desc')
        ->get();  
    }
    public function mount()
    {
            

            $this->activities = Activity::with('promoter', 'category', 'country', 'city')->whereYear('date', '>=', 2023)
            ->get();

        

     
            if(!Session::has('filter-active'))
            {

                $this->sortActivitiesWithDistances(floatval($this->latitude ), floatval($this->longitude));
                $this->sortActivitiesByDate();
            }
            if(Session::has('filter-active')){
                if(Session::has('setting-distance'))
                {
                    $this->sortedActivities = Session::get('setting-distance');
                    $this->isByDistance = true;
                    $this->isByDate = false;
                    $this->isByFilter = false;
                }

                //dd(Session::get('setting-distance'), Session::get('setting-date'));
                
                if(Session::has('setting-date'))
                {
                    $this->sortedActivitiesByDate = Session::get('setting-date');
                    $this->isByDate = true;
                    $this->isByDistance = false;
                    $this->isByFilter = false;
                }
                if(Session::has('filter') && !Session::has('setting-date') && !Session::has('setting-distance'))
                {
                    $this->sortedActivitiesByFilter = Session::get('filter');
                    
                    $this->isByFilter = true;
                    $this->isByDistance = false;
                    $this->isByDate = false;
                }
                
                if(Session::has('setting-distance') && Session::has('setting-date'))
                {
                    $this->isByDistance = true;
                    $this->isByDate = true;
                }
            }
        
    }
    public function render()
    {
        return view('livewire.activity-component');
    }
}
