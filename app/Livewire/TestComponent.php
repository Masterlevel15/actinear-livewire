<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Category;

class TestComponent extends Component
{
    public  $categories, $selectedCategories = [];
    public function mount()
    {
        $this->categories = Category::all();
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
    
    public function render()
    {
        return view('livewire.test-component');
    }
}
