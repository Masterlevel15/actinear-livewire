<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\On; 
use App\Models\Activity;
use App\Models\City;


class ActivitiesList extends Component
{
    public $activities;
    public $queryHistory = [];

    #[On('search-query')] 
    public function updateActivities()
    {
        //recupèrer valeur ?searchQuery=Ath  de l'url
        $searchQuery = request('searchQuery');
        $city = City::select('id')->where('name', $searchQuery)->first();
        $this->activities = Activity::where('city_id', $city->id)->get();  
        // Redessinez la vue avec les nouvelles activités
        $this->render();
        return view('livewire.activities-list');
    }


    public function mount($activities)
    {
       
        
        if(request('searchQuery') || (!in_array(request('searchQuery') , $this->queryHistory) && request('searchQuery')) )
        {
           
           array_push($this->queryHistory, request('searchQuery'));
            $this->updateActivities();
            
        } 
        else{
            $this->activities = $activities; 
        }
    }
    public function render()
    {
        return view('livewire.activities-list');
    }
}
