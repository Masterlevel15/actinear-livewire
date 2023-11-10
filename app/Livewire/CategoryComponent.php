<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Category;

class CategoryComponent extends Component
{
    public $categories, $url;

    public function getCategories(){
        $this->categories = Category::all();
        return $this->categories;
    }
    public function mount(){
        $this->getCategories();
        /*
        foreach($this->categories as $category)
        {
            $randNumber = rand(10, 200);
            $image = "https://picsum.photos/id/{$randNumber}/800/600";
           
           $category->image = $image;
        }
        */
        
    }
    public function render()
    {
        return view('livewire.category-component');
    }
}
