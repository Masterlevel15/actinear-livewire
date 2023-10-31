<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;

class ActivityComponent extends Component
{
    #[Reactive] 
    public $lat;
    public $long, $distance;
    public $sortedActivities = [];
    public $activities;

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
    public function mount($latitude,    $longitude)
    {
            $this->lat = $latitude;
            $this->long = $longitude;

            $this->activities = Activity::with('promoter', 'category', 'country', 'city')->whereYear('date', '>=', 2023)
            ->get();
            
            $this->sortActivitiesWithDistances(floatval($latitude), floatval($longitude));
        
    }
    public function render()
    {
        return view('livewire.activity-component')->with([
            'DiseaseDiagnosed' => json_encode($this->sortedActivities),
        ]);
    }
}
