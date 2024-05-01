<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\User;
use App\Models\City;
use App\Models\Country;

class PromoterProfile extends Component
{

    public $id, $promoter, $city, $country, $activateNotifRating = false;

    public function mount($promoterId)
    {
        $this->id = $promoterId;
        $this->promoter =  User::find($promoterId);
        if($this->promoter->city_id)
        {
            $this->city = City::where('id', $this->promoter->city_id)->first();
        }
        if($this->promoter->country_id)
        {
            $this->country = Country::where('id', $this->promoter->country_id)->first();
        }
    }

    public function addRating() 
    {
        if(auth()->check())
        {
            if(auth()->user()->id !== $this->promoter->id)
            {
                $this->activateNotifRating = true;
            }
            else
            {
                session()->flash('status', 'Vous ne pouvez pas vous attribuer une note');
            }
        }
        else
        {
            $this->redirect('/register'); 
        }
        
    }

    public function disableRating() 
    {
        $this->activateNotifRating = false;
    }

    public function render()
    {
        return view('livewire.promoter-profile');
    }
}
