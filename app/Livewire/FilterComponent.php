<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\On;
use App\Models\Activity;
use App\Models\Category;
use App\Models\City;
use Illuminate\Http\Request;

class FilterComponent extends Component
{
    public
    $resultsByDate,
    $resultsByDistance,
    $searchQuery,
    $searchQueryResult, 
    $suggestions, 
    $results, 
    $table,
    $categories, 
    $selectedCategories = [], 
    $selectedSettingsId = [],
    $selectedSettings = [],
    $isActive = false, 
    $cities = [],
    $sliderValue,
    $title,
    $settings = array(
        array(
            "id" =>  1,
            "title" => "Tri par distance",
            "name" => "Distance croissante",
            "active" => false,
        ),
        array(
            "id" => 2,
            "title" => "Tri par date",
            "name" => "Date croissante",
            "active" => false,
        )
    );

    public function mount()
    {
        
        $this->getCities();
        $this->categories = Category::all();
       
        //$this->classActive = ' $isActive ? \'bg-blue-light text-white font-semibold\' : \'bg-[#CEE6E7] text-slate-800 border border-blue-light\'';
    }

    //SearchBar 
    public function searchResult()
    {
        if ($this->searchQuery !== '' && strlen($this->searchQuery) >= 1) {
            $this->table = 'City';
            $modelName = "App\\Models\\" . $this->table;

            $this->suggestions = $modelName::where('name', 'like', $this->searchQuery . '%')->get();
        } else {
            $this->suggestions = []; // Réinitialisez les suggestions si la recherche est vide ou courte.
        }
    
    }
    #[On('slider-value')] 
    public function getValueFromSlider($distance)
    {
        $this->sliderValue = $distance;
    }
    public function selectSuggestion($selectedSuggestion)
    {
        $suggestion = json_decode($selectedSuggestion, true);
        $this->searchQuery = $suggestion['name'];
        $this->searchQueryResult = $suggestion;
        $this->suggestions = [];
    }
    //Fin SearchBar

    public function toggleSetting($settingId)
    {
        $foundKey = array_search($settingId, array_column($this->settings, 'id'));

        if(in_array($settingId, $this->selectedSettingsId)) {
            // Si la catégorie est déjà sélectionnée, la désélectionner
            $this->selectedSettingsId = array_filter($this->selectedSettingsId, function($id) use ($settingId) {
                return $id !== $settingId;
                
            });
        } else {
            // Sinon, ajoutez la catégorie à la liste des catégories sélectionnées
            $this->selectedSettingsId[] = $settingId;
            array_push($this->selectedSettings , $this->settings[$foundKey]);
        }
        // Recherchez l'élément dans $settings et inversez sa valeur 'active'
        foreach ($this->settings as &$setting) {
            if ($setting['id'] === $settingId) {
                $setting['active'] = !$setting['active'];
            }
        }
     
    }
    //#[On('post-created')] 
    public function updateTitle($title)
    {
        
        $this->title = $title;
    }
    public function toggleCategory($categoryId)
    {
        if(in_array($categoryId, $this->selectedCategories)) {
            // Si la catégorie est déjà sélectionnée, la désélectionner
            $this->selectedCategories = array_filter($this->selectedCategories, function($id) use ($categoryId) {
                return $id !== $categoryId;
            });
        } else {
            // Sinon, ajoutez la catégorie à la liste des catégories sélectionnées
            $this->selectedCategories[] = $categoryId;
        }
    }
    public function getCities()
    {
        $this->cities = City::all();
    }
    /*
    public function applyFilters()
    {
        dd(session('activitiesWithDistance'));
        $this->dispatch('filter-apply', true);
        
        session()->flush();
        session()->flash('filter-active', true);
        //$query = Activity::query(); // Commencez avec une requête de base
        $query = session('activitiesWithDistance');
        
        // Filtre par ville
        if ($this->searchQueryResult) {
            $query->where('city_id', $this->searchQueryResult['id']);
        }

        // Filtre par distance en utilisant le sliderValue
        if ($this->sliderValue) {
            $query->where('distance', '<=' ,$this->sliderValue)->whereYear('date', '>=', 2023)
            ->get();
        }
        
        // Filtre par catégories
        if (!empty($this->selectedCategories)) {
            $query->whereIn('category_id', $this->selectedCategories);
        }

        // Initialisation des résultats
        $this->resultsByDate = collect();
        $this->resultsByDistance = collect();

        session()->flash('filter', $query->get());

        // Clonez la requête d'origine pour le tri par distance
        $queryForDistance = clone $query;

        // Tri par date
        if (in_array(2, $this->selectedSettingsId)) {
            dd('test');
            $this->resultsByDate = $query
                ->sortBy('date');
            session()->flash('setting-date', $this->resultsByDate);
        }
        // Tri par distance
        if (in_array(1, $this->selectedSettingsId)) {
            $this->resultsByDistance = $queryForDistance
            ->sortBy('distance');
            session()->flash('setting-distance', $this->resultsByDistance); 
        }

        //dd($this->resultsByDistance, $this->resultsByDate);
        //dd($query->with('promoter', 'category', 'country', 'city')->get());
        
        //return $query->get();
        // Obtenez les résultats finaux
        
    }
*/

    public function applyFilters()
    {
    
    $this->dispatch('filter-apply', true);
    $activitiesWithDistance = collect(session('activitiesWithDistance'));
    //session()->flush();
    session()->flash('filter-active', true);

    // Remplacez la requête initiale par la collection stockée en session

    // Filtre par ville
    if ($this->searchQueryResult) {
        $activitiesWithDistance = $activitiesWithDistance->where('city_id', $this->searchQueryResult['id']);
    }

    // Filtre par distance en utilisant le sliderValue
    if ($this->sliderValue) {
        $activitiesWithDistance = $activitiesWithDistance->where('distance', '<=', $this->sliderValue);
    
    }

    // Filtre par catégories
    if (!empty($this->selectedCategories)) {
        $activitiesWithDistance = $activitiesWithDistance->whereIn('category_id', $this->selectedCategories);
    }

    // Initialisation des résultats
    $this->resultsByDate = collect();
    $this->resultsByDistance = collect();


    // Stocker les résultats filtrés dans la session
    session()->flash('filter', $activitiesWithDistance);

    // Clonez la collection filtrée pour le tri par distance
    $activitiesForDistance = clone $activitiesWithDistance;

    // Tri par date
    if (in_array(2, $this->selectedSettingsId)) {
        $this->resultsByDate = $activitiesWithDistance
            ->sortBy('date');
        session()->flash('setting-date', $this->resultsByDate);
    }

    // Tri par distance
    if (in_array(1, $this->selectedSettingsId)) {
        $this->resultsByDistance = $activitiesForDistance
            ->sortBy('distance');
        session()->flash('setting-distance', $this->resultsByDistance);
    }
}



    public function sendResult()
    {
        $this->applyFilters();
        //dd($this->searchQuery, $this->selectedSettings, $this->selectedCategories, $this->sliderValue);
 
        $this->redirect('/');
    }
    /*
    public function citiesSuggestion()
    {
        $filePath = resource_path('db/BE.txt');
        $handle = fopen($filePath, 'r');

        if ($handle) {
            // Lire le fichier ligne par ligne.
            while (($line = fgets($handle)) !== false) {
                // Utilisez explode pour diviser la ligne en utilisant la tabulation comme séparateur
                $fields = explode("\t", $line);
                
                // Créez un tableau associatif pour chaque entité géographique
                $geoEntity = [
                    'geonameid' => $fields[0],
                    'name' => $fields[1],
                    'asciiname' => $fields[2],
                    // Ajoutez autant de champs que nécessaire en fonction de la structure de votre fichier
                    'latitude' => $fields[4],
                    'longitude' => $fields[5],
                    // etc...
                ];
                if(!in_array($geoEntity['name'], $this->cities)){
                    array_push($this->cities, $geoEntity['name']);
                }
            }
            dd($this->cities);
            fclose($handle);
        } else {
            // erreur lors de l'ouverture du fichier.
            echo "Erreur lors de l'ouverture du fichier";
        }
    }
    */
    public function render()
    {
        return view('livewire.filter-component');
    }
}
