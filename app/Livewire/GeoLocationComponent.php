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
    public $latitude = null;
    public $longitude = null;
    public $latitudeOffline = null;
    public $longitudeOffline = null;
    public $positionFound = false;
    public $citySelected = true;
    public $loadingActive = false;
    public $online;

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

    #[On('stop-loading')]
    public function stopLoading()
    {
        //on stope le chargement en fonction du délai établi en js avec le setTimeout
        session()->forget('loading-active');
    }

    #[On('geolocation-position-denied')]
    public function geolocationDenied()
    { 
       
        session(['geolocation-denied' => true]);
    }

    /*
    #[On('location-retrieved')] 
    public function setLocation($latitude, $longitude, $positionFound)
    {
        //dd('location-retrieved');

            $this->positionFound = $positionFound;
            $this->latitude = $latitude;
            $this->longitude = $longitude;

            session()->forget('geolocation-denied');
            session()->forget('geolocation-offline');
    }
    */
    /*
    #[On('coordinates-offline')]
    public function mount()
    {
        
        if(session('component_load_count') >= 1)
        {
            //dd(session('component_load_count'));
            session()->flash('loading-active');
        }
            if(session()->has('geolocation-offline') && session()->has('geolocation-denied'))
            {
                //dd('mount');
                $this->loadCount = session('component_load_count', 0) + 1;
                session(['component_load_count' => $this->loadCount]);
                //session()->flash('loading-active');
            
                //session()->forget('loading-active');
            
                
                $geolocation = session('geolocation-offline');
                $this->latitudeOffline = $geolocation['latitude'];
                $this->longitudeOffline = $geolocation['longitude'];
                $this->positionFound = true;
                $this->statutPosition = false;


                //dd(session()->has('geolocation-denied'));
            }
            else
            {
                $this->loadCount = 0;
                session(['component_load_count' => $this->loadCount]);
            }
            
    }
    */
    #[On('coordinates-offline')]
    public function coordinatesOffline()
    {
        //dd('coordinates-offline');
        $this->online = false;
        //dd('coordinates');
        $this->latitude = null;
        $this->longitude = null;

        $geolocation = session('geolocation-offline');

        session_start();
        /*
        if(isset($_SESSION['latitudeOffline']) && isset($_SESSION['longitudeOffline']) )
        {

            unset($_SESSION['latitudeOffline']);
            unset($_SESSION['longitudeOffline']);
        }  
        
        if(isset($_SESSION['latitude']) && isset($_SESSION['longitude']) )
        {
            unset($_SESSION['latitude']);
            unset($_SESSION['longitude']);
        }   
        */

        

        
        $_SESSION['latitudeOffline'] = $geolocation['latitude'];
        $_SESSION['longitudeOffline'] = $geolocation['longitude'];
        
       
        $this->latitude = $geolocation['latitude'];
        $this->longitude = $geolocation['longitude'];
        $this->positionFound = true;

        session()->forget('location-retrieved');
    }

    public function mount()
    {
        if(!isset($_SESSION)) 
        { 
            session_start(); 
        } 

        if(session('component_load_count') >= 1)
        {
            session()->flash('loading-active');
        }

        if(session()->has('geolocation-offline') && session()->has('geolocation-denied'))
        {
            $this->loadCount = session('component_load_count', 0) + 1;
            session(['component_load_count' => $this->loadCount]);

            $this->positionFound = true;

            if(isset($_SESSION['latitudeOffline']))
            {
                $this->latitude = $_SESSION['latitudeOffline'];
                $this->longitude = $_SESSION['longitudeOffline']; 
            }
            //dd('latitudeOffline');
               
        }
        else
        {
            $this->loadCount = 0;
            session(['component_load_count' => $this->loadCount]);
        }
    }

    #[On('location-retrieved')] 
    public function locationRetrieved($latitude, $longitude, $positionFound)
    {
        if(isset($_SESSION['latitudeOffline']))
        {
                unset($_SESSION['latitudeOffline']);
                unset($_SESSION['longitudeOffline']);
                  
        }
        //dd('location-retrieved');

            /*
            if(isset($_SESSION['latitude']) && isset($_SESSION['longitude']) )
            {
               unset($_SESSION['latitude']);
               unset($_SESSION['longitude']);
            }   
            */

            

            if(session()->has('geolocation-offline') && session()->has('geolocation-denied'))
            {
                session()->forget('geolocation-denied');
                session()->forget('geolocation-offline');
            }
            
            session()->flash('location-retrieved');

            /*
            if(!session()->has('geolocation-offline') && !session()->has('geolocation-denied'))
            {
                if(!isset($_SESSION['latitudeOffline']) && !isset($_SESSION['longitudeOffline']))
                {
                    
                }

            }
            */

            $this->positionFound = $positionFound;
            $this->latitude = $latitude;
            $this->longitude = $longitude;
           
            session()->forget('geolocation-denied');
            session()->forget('geolocation-offline');
    }

    public function render()
    {
        return view('livewire.geolocation-component');
    }
}