<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;

class ActivityComponent extends Component
{

    #[Reactive] 
    public $latitude, $latitudeOffline;
    public $longitude, $longitudeOffline, $distance;
    public $sortedActivities;
    public $activities;
    public $sortedActivitiesByDate, $sortedActivitiesByDistance, $sortedActivitiesByFilter;
    public $isByDistance = true, $isByDate = true, $isByFilter = false;
    public $online;
    public $currentDate;
    public $activitiesWithDistance;

    private function radians(float $degrees): float
    {   
    return $degrees * pi() / 180;
    }

    private function distanceBetweenCoordinates(Array $coords1, Array $coords2) {
        $this->distance = ACOS(SIN(self::radians($coords1['latitude']))*SIN(self::radians($coords2['latitude']))+COS(self::radians($coords1['latitude']))*COS(self::radians($coords2['latitude']))*COS(self::radians($coords1['longitude'] - $coords2['longitude'])))*6371;

        return $this->distance;
    }
    public function calculateDistance()
    {
        $activities = $this->activities;
        $this->activitiesWithDistance = [];

        foreach($activities as $activity) {
            $latitudeFromDB =  $activity->latitude;
            $longitudeFromDB =  $activity->longitude;

            self::distanceBetweenCoordinates(['latitude' => $this->latitude, 'longitude' => $this->longitude], ['latitude' => $latitudeFromDB,'longitude' => $longitudeFromDB]);

            // Création d'un tableau avec les distances

            $activity->distance = $this->distance;
            array_push($this->activitiesWithDistance, $activity);
        }
        
        session(['activitiesWithDistance' => $this->activitiesWithDistance]);

    }
    public function sortActivitiesWithDistances()
    {
        
        $distance = 300;
        if($distance === null ){
            $distance = 200;
        }
        else{
            $distance = 150;
        }
        //Gestion Date

        $activities = $this->activitiesWithDistance;

        $activitiesSortByRange = [];
        foreach($activities as $activity) {
            $latitudeFromDB =  $activity->latitude;
            $longitudeFromDB =  $activity->longitude;

            
            //$activity->save();
            if($activity->distance < $distance) {
                array_push($activitiesSortByRange, $activity);
            }
        }

        $this->sortedActivities = collect($activitiesSortByRange)->sortBy('distance');
        
        //Cas Aucun résultat Activités à proximité
        if(count($this->sortedActivities) <= 0 || $this->sortedActivities== [])
        {
            session()->flash('no-results-distance', 'Aucune activité disponible à proximité, veuillez utiliser le filtre pour étendre la recherche.');
        }
        //
        return  $this->sortedActivities;  
               
    }
    public function sortActivitiesByDate()
    {
       /*$this->sortedActivitiesByDate = Activity::with('promoter', 'category', 'country', 'city')->whereDate('date', '>=', 2023)->orderBy('date', 'asc')
        ->get(); */
        
        $this->sortedActivitiesByDate = collect($this->activitiesWithDistance)->sortBy('date');
        //Cas Aucun résultat pour Prochaines activités
        if(count($this->sortedActivitiesByDate) <= 0 || $this->sortedActivitiesByDate == [])
        {
            session()->flash('no-results-date', 'Aucune nouvelle activité pour le moment, repassez plus tard.');
        }
        //
    }

    public function mount()
    {
        $this->currentDate = Carbon::now();
        $this->activities = Activity::with('promoter', 'category', 'country', 'city')->whereDate('date', '>=', $this->currentDate)
            ->get();

        if(!Session::has('filter-active'))
        {
            //$this->latitude = $_SESSION['latitude'];
            //$this->longitude = $_SESSION['longitude'];
            $this->calculateDistance();
                    
            $this->sortActivitiesWithDistances();

            $this->sortActivitiesByDate();
        }  


            if(Session::has('filter-active')){
            
                if(Session::has('setting-distance'))
                {
                    $this->sortedActivities = Session::get('setting-distance');
                    $this->isByDistance = true;
                    $this->isByDate = false;
                    $this->isByFilter = false;
                    
                    //Si aucun résultat (tableau vide)
                    if(count($this->sortedActivities) <= 0 || $this->sortedActivities == [])
                    {
                        session()->flash('no-results-distance', 'Aucune activité disponible à proximité, veuillez utiliser le filtre pour étendre la recherche.');
                    }
                }
                
                if(Session::has('setting-date'))
                {
                    
                    $this->sortedActivitiesByDate = Session::get('setting-date');
                    $this->isByDate = true;
                    $this->isByDistance = false;
                    $this->isByFilter = false;
                    
                    //Si aucun résultat (tableau vide)
                    if(count($this->sortedActivitiesByDate) <= 0 || $this->sortedActivitiesByDate == [])
                    {
                        session()->flash('no-results-date', 'Aucune nouvelle activité pour le moment, repassez plus tard.');
                    }
                    
                }
                if(Session::has('filter') && !Session::has('setting-date') && !Session::has('setting-distance'))
                {
                    $this->sortedActivitiesByFilter = Session::get('filter');
                    
                    $this->isByFilter = true;
                    $this->isByDistance = false;
                    $this->isByDate = false;
                    
                    //Si aucun résultat (tableau vide)
                    if(count($this->sortedActivitiesByFilter) <= 0 || $this->sortedActivitiesByFilter == [])
                    {
                        session()->flash('no-results', 'Aucun résultat veuillez étendre la recherche.');
                    }
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
