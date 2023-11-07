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
 

class GeoLocationComponent extends Component
{
    public $latitude;
    public $longitude;
    public $nearbyActivities;
    public $message;
    /*
    public function boot()
    {
        
        
        $ipInfo = file_get_contents('https://ipinfo.io');
        $data = json_decode($ipInfo);

        $this->latitude = $data->loc ? explode(',', $data->loc)[0] : null;
        $this->longitude = $data->loc ? explode(',', $data->loc)[1] : null; 
        
    }
    */

    #[On('location-retrieved')] 
    public function setLocation($latitude, $longitude)
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;
        // Ici, vous pouvez exécuter la requête qui nécessite les coordonnées
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

    public function mount()
    {
        //$this->updateAdress();
    }


    public function render()
    {
        return view('livewire.geo-location-component');
    }
}
