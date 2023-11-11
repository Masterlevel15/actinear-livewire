<?php

namespace App\Livewire;

use Livewire\Attributes\On;
use Livewire\Component;
use Geocoder\Query\GeocodeQuery;
use Geocoder\Query\ReverseQuery;
use Geocoder\Provider\Nominatim\Nominatim;
use Geocoder\Exception\NoResultException;
use GuzzleHttp\Client as GuzzleClient;
use App\Providers\CustomNominatim;
use Illuminate\Support\Facades\Session;

class GeolocationOffline extends Component
{
    public  $geolocationDenied = false, $showInputCity = false, $buttonText = 'Choisir une ville', $text = "Vous devez activer la localisation pour utiliser cette fonctionnalité. Ou bien introduisez une ville, si vous souhaitez ne pas autoriser la localisation du navigateur", $city, $queryLoading = false;
    
    public function mount() 
    {
       
    }

    public function queryCity()
    {
        session()->forget('city-not-found');
        $httpClient = new GuzzleClient();
        $userAgent = 'together-app-jetstream';

        $nominatim = new Nominatim($httpClient, 'https://nominatim.openstreetmap.org', $userAgent);

        $result = $nominatim->geocodeQuery(GeocodeQuery::create($this->city));

        if ($result->count() > 0) {
                    
            $this->latitude = $result->first()->getCoordinates()->getLatitude();
            $this->longitude = $result->first()->getCoordinates()->getLongitude();
            session([
                'geolocation-offline' => [
                    'latitude' => $this->latitude,
                    'longitude' => $this->longitude,
                ],
            ]);
            $this->dispatch('coordinates-offline');
        }
        else
        {
            session()->flash('city-not-found', 'La ville que vous avez introduite semble introuvable.');
        }
    }

    #[On('retry-geolocation')] 
    public function showInputCity()
    {   
        $this->text = "Introduisez votre ville pour consulter les activités à proximité de chez vous";
        $this->buttonText = "Introduisez votre ville";
        $this->showInputCity = true;
    }

    

    public function render()
    {
        return view('livewire.geolocation-offline');
    }
}
