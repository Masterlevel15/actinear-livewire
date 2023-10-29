<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;



class SearchBarComponent extends Component
{
    public $searchQuery, $suggestions= [], $selectedActivity;
    public function updatedSearchQuery()
    {
        $query = $this->searchQuery;
    }
    public function searchActivities()
    {
        if ($this->searchQuery !== '' && strlen($this->searchQuery) >= 1) {
            $this->suggestions = Activity::where('title', 'like', $this->searchQuery . '%')->get();
        } else {
            $this->suggestions = []; // Réinitialisez les suggestions si la recherche est vide ou courte.
        }
    }
    public function selectSuggestion($suggestion)
    {
        $this->selectedActivity = 'test';
        $activityArray = json_decode($suggestion, true);
        $this->searchQuery = $activityArray['title'];
        $this->suggestions = [];

    }
    public function generateActivityLink()
    {
        $id = 2;
        $distance = 1.4;
        return route('activity-details', ['id' => $id, 'distance' => $distance]);
    }
    public function mount() 
    {

    }
    public function render()
    {
        
        return view('livewire.search-bar-component');
    }
}
