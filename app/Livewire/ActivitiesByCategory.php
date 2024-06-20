<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Category;

class ActivitiesByCategory extends Component
{
    public $activities;
    
    public function mount($categoryId)
    {
        //$category = Category::find($categoryId);
        //$this->activities = $category->activities;
        //dd($this->activities);
        $activitiesWithDistance = collect(session('activitiesWithDistance'));
        //dd($activitiesWithDistance->whereIn('category_id', $categoryId), $this->activities);
        $this->activities = $activitiesWithDistance->whereIn('category_id', $categoryId);
    
        session_start();
        $_SESSION['ActivitiesByCategory'] = $this->activities;
    }
    public function render()
    {
        return view('livewire.activities-by-category');
    }
}
