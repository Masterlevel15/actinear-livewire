<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Category;

class CategoryComponent extends Component
{
    public $categories;

    public function getCategories(){
        $this->categories = Category::all();
        return $this->categories;
    }
    public function mount(){
        $this->getCategories();
    }
    public function render()
    {
        return view('livewire.category-component');
    }
}
