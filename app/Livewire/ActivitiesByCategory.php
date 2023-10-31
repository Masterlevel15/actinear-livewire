<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Category;

class ActivitiesByCategory extends Component
{
    public $activities;
    
    public function mount($categoryId)
    {
        $category = Category::find($categoryId);
        $this->activities = $category->activities;
    }
    public function render()
    {
        return view('livewire.activities-by-category');
    }
}
