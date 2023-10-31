<?php

namespace App\Livewire;

use Livewire\Component;

class RatingComponent extends Component
{
    public $rating = 0;
    public $maxRating = 5;
    public $promoterId;

    public function mount($promoterId)
    {
        $this->promoterId = $promoterId;

        if(auth()->check()) {
            $previousRating = auth()->user()->givenRatings()
            ->where('promoter_id', $promoterId)
            ->first();

            if ($previousRating) {
                $this->rating = $previousRating->pivot->rating;
            }
        }
    }

    public function rate($rating)
    {
        $this->rating = $rating;

        if(!auth()->check()) {
            return redirect()->route('login');
        }

        $user = auth()->user();
        $existingRating = $user->givenRatings()
            ->where('promoter_id', $this->promoterId)
            ->first();
    
        if ($existingRating) {
            $user->givenRatings()->updateExistingPivot($this->promoterId, ['rating' => $this->rating]);
        } else {
            $user->givenRatings()->attach($this->promoterId, ['rating' => $this->rating]);
        }
    }
    
    public function render()
    {
        return view('livewire.rating-component');
    }
}
