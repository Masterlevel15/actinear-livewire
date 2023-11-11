<?php

namespace App\Livewire;

use Livewire\Attributes\On;
use Livewire\Component;
use Illuminate\Support\Facades\Session;

class OfflineLoading extends Component
{
    public  $geolocationDenied = false, $showInputCity = false, $buttonText = 'Choisir une ville', $text = "Vous devez activer la localisation pour utiliser cette fonctionnalité. Ou bien introduisez une ville, si vous souhaitez ne pas autoriser la localisation du navigateur", $city, $queryLoading = false;
    
    public function mount() 
    {
        if(Session::has('longitude') && Session::has('latitude'))
        {
            $this->queryLoading = true;
        }
       
    }
    public function getCity()
    {
        $this->queryLoading = true;
        $this->dispatch('input-city', city: $this->city);
    }
    /*
    #[On('input-city-active')]
    public function disableGeolocationDenied($geolocationDenied)
    {
        $this->geolocationDenied = $isGeolocationDenied;
    }
    */

    #[On('retry-geolocation')] 
    public function showInputCity()
    {
        $this->text = "Introduisez votre ville pour consulter les activités à proximité de chez vous";
        $this->buttonText = "Introduisez votre ville";
        $this->showInputCity = true;
    }

    #[On('geolocation-denied')] 
    public function geolocationDenied($geolocationDenied)
    {
        if($this->queryLoading)
        {
            $this->geolocationDenied = false;
        }
        else
        {
            //dd('not yet query');
            $this->geolocationDenied = $geolocationDenied;
        }
        
    }

    public function render()
    {
        return view('livewire.offline-loading');
    }
}
