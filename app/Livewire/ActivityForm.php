<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Database\Eloquent\Factories\Factory;
use Geocoder\Query\GeocodeQuery;
use Geocoder\Query\ReverseQuery;
use Geocoder\Provider\Nominatim\Nominatim;
use Geocoder\Exception\NoResultException;
use GuzzleHttp\Client as GuzzleClient;
use App\Providers\CustomNominatim;
use App\Models\Category;
use App\Models\Activity;
use App\Models\City;
use App\Models\Country;

class ActivityForm extends Component
{
    use WithFileUploads;

    public $activity, $categories, $selectedCategory = [], $path;
    public $title, $date, $hour, $term, $participants_number, $address, $description, $distance, $latitude, $longitude, $photo, $country, $city, $promoter, $validate, $zipCode;
    public $isPhoto = false, $photoIsUploaded = false, $url;
    public function mount()
    {
        $this->date = now()->format('Y-m-d');
        $this->categories = Category::all();
    }
    
    public function updatedPhoto()
    {
        if ($this->photo->isValid()) {
            $this->photoIsUploaded = true;
            $this->isPhoto = false;
                //Stockage de l'image depuis le serveur
            try {
                $filename = $this->photo->getClientOriginalName();
                $this->photo->storeAs('/images', $filename, 'public_uploads');
                $this->photo = $filename;
            } catch (\Exception $e) {
                dd($e->getMessage());
            }
            $this->url = asset('images/' . $this->photo);
        }
    }   
    public function fileSet()
    {
        $this->photoIsUploaded = false;
        $this->isPhoto = true;
    }
    public function toggleCategory($categoryId)
    {
        if(in_array($categoryId, $this->selectedCategory)) {
            // Si la catégorie est déjà sélectionnée, la désélectionner
            $this->selectedCategory = array_filter($this->selectedCategory, function($id) use ($categoryId) {
                return $id !== $categoryId;
            });
        } else {
            // Sinon, ajoutez la catégorie à la liste des catégories sélectionnées
            $this->selectedCategory= [];
            $this->selectedCategory[] = $categoryId;
        }
    }
    public function getCoordinates($address)
    {
        
        $httpClient = new GuzzleClient();
        $userAgent = 'actinear-livewire';

        $nominatim = new Nominatim($httpClient, 'https://nominatim.openstreetmap.org', $userAgent);

        try {
            $result = $nominatim->geocodeQuery(GeocodeQuery::create($address))->first();
            
            if ($result) {
                $this->latitude = $result->getCoordinates()->getLatitude();
                $this->longitude = $result->getCoordinates()->getLongitude();
                $this->resetErrorBag();
                $this->zipCode = $result->getPostalCode();

            } else {
                // Ville non trouvée, définir un message d'erreur et ne pas continuer
                $this->addError('city', 'L\'adresse introduite n\'est pas valide.');
            }
        } catch (\Exception $e) {
            // Gérer l'exception ici, si nécessaire
            $this->addError('city', 'Une erreur s\'est produite lors de la recherche des coordonnées.');
        }

    }

    public function save()
    {
        $this->validate([
            'title' => 'required',
            'date' => 'required',
            'term' => 'required',
            'participants_number' => 'required',
            'address' => 'required',
            'photo' => 'max:1024', // 1MB Max
            'selectedCategory' => 'required',
        ]);
        
        // Diviser l'adresse en un tableau de mots
        $array = explode(' ', $this->address);

        // Extraire le numéro de rue (dernier élément du tableau)
        $streetNumber = $array[count($array) - 1];

        // Extraire le nom de la rue (tous les éléments sauf le dernier)
        $street = array_slice($array, 0, count($array) - 1);
            
        // Recomposer le nom de la rue en une chaîne de caractères
        $streetName = implode(' ', $street);

        // Composer l'adresse complète
        $fullAddress = $streetNumber . ' ' . $streetName . ', ' . $this->city . ', ' . $this->country;

        if($fullAddress)
        {
            $this->getCoordinates($fullAddress);
        }

        $dateTime = $this->date . ' ' . $this->hour;

        if (!$this->getErrorBag()->has('city')) {
            //Stockage de l'image depuis le serveur
            /*if($this->photo)
            {
                try {
                    $filename = $this->photo->getClientOriginalName(); // Assurez-vous de nettoyer le nom de fichier
                    $this->photo->storeAs('/images', $filename, 'public_uploads');
                } catch (\Exception $e) {
                    dd($e->getMessage());
                }
            } 
            */ 

            $activity = new Activity;
            $activity->title = $this->title;
            if($this->selectedCategory)
            {
                $activity->category_id = $this->selectedCategory[0];
            }
            $activity->date = $dateTime;
            $activity->term = $this->term;
            $activity->participants_number = $this->participants_number;
            $activity->address = $this->address;
            $activity->description = $this->description;
            $activity->latitude = $this->latitude;
            $activity->longitude = $this->longitude;

            if($this->photo)
            {
                $activity->image = $this->photo;
            }
            else
            {
                $randNumber = rand(10, 200);
                $activity->image = 
                "https://picsum.photos/id/{$randNumber}/800/600";
            }
            if(auth()->check())
            {
                $activity->promoter_id = auth()->user()->id;
            }

            if($this->city)
            {
                $cityExisting = City::where('name', $this->city)->first();
                if(!$cityExisting)
                {
                    $city = new City;
                    
                    $city->name = ucfirst(strtolower($this->city));
                    $city->zip_code = $this->zipCode;
                    $city->save();
                    $activity->city_id = $city->id; 
                }
                else
                {
                    $activity->city_id = $cityExisting->id;
                }
            }

            if($this->country)
            {
                $countryExisting = Country::where('name', $this->country)->first();
                if(!$countryExisting)
                {
                    $country = new Country;
                    $country->name = ucfirst(strtolower($this->$country));
                    $country->save();

                    $activity->country_id = $country->id; 
                }
                else
                {
                    $activity->country_id = $countryExisting->id;
                }
            }
            $activity->save();
        }

        $this->redirect('/');
    }

    public function render()
    {
        return view('livewire.activity-form');
    }
}
