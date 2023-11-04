<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Category;
use Livewire\Attributes\On; 
use App\Models\City;

class FilterComponent extends Component
{
    public  
    $categories, 
    $selectedCategories = [], 
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
    public function updatePostList($title)
    {
        // ...
    }
    public function mount()
    {
        $this->getCities();
        $this->categories = Category::all();
       
        //$this->classActive = ' $isActive ? \'bg-blue-light text-white font-semibold\' : \'bg-[#CEE6E7] text-slate-800 border border-blue-light\'';
    }

    public function toggleSetting($settingId)
    {

        dd($this->title);
        if(in_array($settingId, $this->selectedCategories)) {
            // Si la catégorie est déjà sélectionnée, la désélectionner
            $this->selectedSettings = array_filter($this->selectedSettings, function($id) use ($settingId) {
                return $id !== $settingId;
            });
        } else {
            // Sinon, ajoutez la catégorie à la liste des catégories sélectionnées
            $this->selectedSettings[] = $settingId;
        }
        // Recherchez l'élément dans $settings et inversez sa valeur 'active'
        foreach ($this->settings as &$setting) {
            if ($setting['id'] === $settingId) {
                $setting['active'] = !$setting['active'];
            }
        }
     
    }
    #[On('post-created')] 
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
