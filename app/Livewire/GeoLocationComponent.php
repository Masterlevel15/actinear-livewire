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
use App\Models\Activity;
use App\Models\City;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class GeolocationComponent extends Component
{
    public $latitude;
    public $longitude;
    public $positionFound = false;
    public $citySelected = true;
    public $loadingActive = false;
    public $token = false;
    
    #[On('geolocation-denied')]
    public function geolocationDenied()
    {
        session()->flash('geolocation-denied');
        session()->forget('location-retrieved'); 
    }
    #[On('location-retrieved')] 
    public function setLocation($latitude, $longitude, $positionFound, $token)
    {
        $this->token = $token;
        //session()->flash('location-retrieved');

        $this->positionFound = $positionFound;
        $this->latitude = $latitude;
        $this->longitude = $longitude;
        
        //
        session()->forget('geolocation-denied');
        session()->forget('geolocation-offline');
    }

    public function updateAdress()
    {
        $httpClient = new GuzzleClient();
            $userAgent = 'together-app-jetstream';

            $nominatim = new Nominatim($httpClient, 'https://nominatim.openstreetmap.org', $userAgent);

            $activities = Activity::all();

            foreach ($activities as $activity)  {
                // Générer une adresse belge aléatoire
                $faker = \Faker\Factory::create('fr_BE');
                $streetAddress = $faker->streetAddress();
                $postcode = $faker->postcode();
                $cityName = $faker->city();
                $countryName = 'Belgique';
                $array = explode(' ', $streetAddress);
                $streetNumber = $array[count($array) - 1];
                $street = array_slice($array, 0, count($array) - 1);
                $streetName = implode(' ',$street);

                $fullStreetAdress = $streetNumber .' '. $streetName;
                $address= $fullStreetAdress . ', ' . $postcode . ' ' . $cityName . ', Belgique';

                echo  $address .'/ '.$cityName;
                //___________________________
                
                $result = $nominatim->geocodeQuery(GeocodeQuery::create($cityName));

                if ($result->count() > 0) {
                    
                    $latitude = $result->first()->getCoordinates()->getLatitude();
                    $longitude = $result->first()->getCoordinates()->getLongitude();
                    
                    $city = City::where('name', $cityName)->first();
                    if ($city) {
                        $activity->city_id = $city->id;
                        $city->zip_code = $postcode;
                    } else {
                        $city = new City();
                        $city->name = $cityName;
                        $city->zip_code = $postcode;
                        $city->save();
                        $activity->city_id = $city->id;
                    }

                    if($countryName === "België / Belgique / Belgien"){
                        $countryName = "Belgique";
                    }

                    $country = Country::where('name', $countryName)->first();
                    if ($country) {
                        $activity->country_id = $country->id;
                    } else {
                        $country = new Country();
                        $country->name = $countryName;
                        $country->save();
                        $activity->country_id = $country->id;
                        $city->save();
                    }
                        
                

                    //zip code
                

                    $activity->latitude = $latitude;
                    $activity->longitude = $longitude;

                    $activity->address = $fullStreetAdress; 

                    $activity->save();

                    echo "Latitude : $latitude, Longitude : $longitude";
                } else {
                    echo "L'adresse n'a pas été trouvée";
                }
            }
    }

    public function setTimeout($fn, $timeout){
        // sleep for $timeout milliseconds.
        sleep(($timeout/1000));
        $fn;
    }  
    /*
    #[On('start-loading')]
    public function startLoading()
    {
        //on lance le composant de chargement lors de l'éxécution du composant actuel
        session()->flash('loading-active');
    }
    */

    #[On('stop-loading')]
    public function stopLoading()
    {
        //on stope le chargement en fonction du délai établi en js avec le setTimeout
        session()->forget('loading-active');
    }

/*
    #[On('coordinates-offline')]
    public function coordinatesOffline()
    {
            //session()->flash('loading-active');
            $geolocation = session('geolocation-offline');
            $this->latitude = $geolocation['latitude'];
            $this->longitude = $geolocation['longitude'];
            $this->positionFound = true;
    }
    */


    #[On('coordinates-offline')]
    public function mount()
    {
        if(session('component_load_count') >= 1)
        {
            //dd(session('component_load_count'));
            session()->flash('loading-active');
        }
        
        //session()->forget('geolocation-offline');
        if (!session()->has('location-retrieved')) 
        {
            if( session()->has('geolocation-offline'))
            {
                $this->loadCount = session('component_load_count', 0) + 1;
                session(['component_load_count' => $this->loadCount]);
                //session()->flash('loading-active');
            
                //session()->forget('loading-active');
            
                $geolocation = session('geolocation-offline');
                $this->latitude = $geolocation['latitude'];
                $this->longitude = $geolocation['longitude'];
                $this->positionFound = true;

            }
            
        }
        else
        {
            $this->loadCount = 0;
            session(['component_load_count' => $this->loadCount]);
        }
    }

    public function render()
    {
        return view('livewire.geolocation-component');
    }
}