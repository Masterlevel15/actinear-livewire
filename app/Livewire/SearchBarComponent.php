<?php

namespace App\Livewire;

use Livewire\Attributes\Url;
use Livewire\Component;


class SearchBarComponent extends Component
{
    public  $suggestions, $results, $table;
    #[Url] 
    public $searchQuery;
    public function mount()
    {
    }
    public function searchResult()
    {
        if ($this->searchQuery !== '' && strlen($this->searchQuery) >= 1) {
            $modelName = "App\\Models\\" . $this->table;

            $this->suggestions = $modelName::where('name', 'like', $this->searchQuery . '%')->get();
        } else {
            $this->suggestions = []; // Réinitialisez les suggestions si la recherche est vide ou courte.
        }
    
    }
    public function selectSuggestion($selectedSuggestion)
    {
        $suggestion = json_decode($selectedSuggestion, true);
        $this->searchQuery = $suggestion['name'];
        $this->suggestions = [];
        $this->dispatch('search-query');
    }
    public function render()
    {
        return view('livewire.search-bar-component');
    }
}
