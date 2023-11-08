<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\Category;
use App\Models\City;
use App\Models\Country;

class PromoterEdit extends Component
{
    use WithFileUploads;

    public $selectedCategories = [], $categories, $categoriesId = [], $pseudo, $category_id, $intro, $description, $firstName, $lastName, $birthDate, $city, $country, $photo, $email, $url, $photoIsUploaded = false, $isPhoto = false;
    public function mount()
    {
        $this->categories = Category::all();
        if(auth()->user()->pseudo)
        {
            $this->pseudo = auth()->user()->pseudo;
        }
        if(auth()->user()->name)
        {
            $fullName = auth()->user()->name;
            $parts = explode( ' ', $fullName);
            $firstName =  $parts[0];
            $lastName =  $parts[1];
            $this->firstName = $firstName;
            $this->lastName = $lastName;
        }
        if(auth()->user()->intro)
        {
            $this->intro = auth()->user()->intro;
        }
        if(auth()->user()->description)
        {
            $this->description = auth()->user()->description;
        }
        if(auth()->user()->birthDate)
        {
            $this->birthDate = auth()->user()->birthDate;
        }
        if(auth()->user()->city_id)
        {
            $city = City::where('id', auth()->user()->city_id)->first();
            $this->city = $city->name;
        }
        if(auth()->user()->country_id)
        {
            $country = City::where('id', auth()->user()->country_id)->first();
            $this->country = $country->name;
        }
        if(auth()->user()->categories)
        {
            foreach(auth()->user()->categories as $category)
            {
                array_push($this->selectedCategories, $category->id);
            }
        }
        if(auth()->user()->photo)
        {
            $this->url = asset('images/' . auth()->user()->photo);
            $this->photo = auth()->user()->photo;
        }
        if(auth()->user()->email)
        {
            $this->email = auth()->user()->email;
        }
    }
    public function updatedPhoto()
    {
        if ($this->photo->isValid()) {
            $this->photoIsUploaded = true;
            $this->isPhoto = false;
            if($this->photo !== auth()->user()->photo)
            {
                try {
                    $filename = $this->photo->getClientOriginalName(); // Assurez-vous de nettoyer le nom de fichier
                    $path = $this->photo->storeAs('/images', $filename, 'public_uploads');
                    //$this->url = asset('storage/' . $path);
                    $this->photo = $filename;
                } catch (\Exception $e) {
                    dd($e->getMessage());
                }
                $this->url = asset('images/' . $this->photo);
                auth()->user()->photo = $this->photo;
            }  
        }
    }  
    public function fileSet()
    {
        $this->photoIsUploaded = false;
        $this->isPhoto = true;
    }
    public function toggleCategory($categoryId)
    {
        if(in_array($categoryId, $this->selectedCategories)) {
            // Si la catégorie est déjà sélectionnée, la désélectionner
            $this->selectedCategories = array_filter($this->selectedCategories, function($id) use ($categoryId) {
                return $id !== $categoryId;
            });
        } else {
            // Sinon, ajoutez la catégorie à la liste des catégories sélectionnées
            $this->selectedCategories[] = $categoryId;
        }
    }
    public function save()
    {
        $this->validate([
            'email' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'photo' => 'image|max:512', // 1MB Max
        ]);
        $user = auth()->user();
        if($this->pseudo !== $user->pseudo)
        {
            $user->pseudo = $this->pseudo;
        }
        if($this->email !== $user->email)
        {
            $user->email = $this->email;
        }
        if($this->intro !== $user->intro)
        {
            $user->intro = $this->intro;
        }
        if($this->description !== $user->description)
        {
            $user->description = $this->description;
        }
        $fullName = ucfirst(strtolower($this->firstName)) .' '. strtoupper($this->lastName);
        if($fullName !== $user->name)
        {
            $user->name = $fullName; 
        }
        if($this->birthDate !== $user->birthDate)
        {
            $user->birthDate = $this->birthDate; 
        }
        if($this->city)
        {
            $cityName = ucfirst(strtolower($this->city));
            $cityExisting = City::where('name', $cityName)->first();
            if(!$cityExisting)
            {
                $city = new City;   
                $city->name = $cityName;
                $city->save();
                $user->city_id = $city->id;
            }
            else
            {
                
                $user->city_id = $cityExisting->id;
            } 
        }
        if($this->country)
        {
            $countryExisting = City::where('name', ucfirst(strtolower($this->country)))->first();
            if(!$countryExisting)
            {
                $country = new City;   
                $country->name = ucfirst(strtolower($this->country));
                $country->save();
                $user->country_id = $country->id;
            }
            else
            {
                $user->country_id = $countryExisting->id;
            } 
        }
        
        
        
        // Initialiser un tableau pour stocker les IDs de catégories de l'utilisateur
        $userCategoryIds = $user->categories->pluck('id')->toArray();

        // Traiter les catégories sélectionnées dans le formulaire
        foreach ($this->selectedCategories as $selectedCategoryId) {
            // Si la catégorie sélectionnée n'est pas déjà liée à l'utilisateur, attachez-la
            if (!in_array($selectedCategoryId, $userCategoryIds)) {
                $user->categories()->attach($selectedCategoryId);
            }
            // Préparez une liste des catégories à conserver pour éviter de les détacher plus tard
            $categoriesToKeep[] = $selectedCategoryId;
     
            
        }

        //
        if(!$this->selectedCategories)
        {
            $categoriesToKeep = []; 
        }
        // Détacher les catégories qui n'ont pas été sélectionnées
        $categoriesToDetach = array_diff($userCategoryIds, $categoriesToKeep);
        if (!empty($categoriesToDetach)) {
            $user->categories()->detach($categoriesToDetach);
        }
        // ou
        /*
        foreach($userCategoryIds as $categoryId)
        {
            if(!in_array($categoryId, $this->selectedCategories))
            {
                $user->categories()->detach($categoryId);
            }
        }
        */
        $user->save();

    }
    public function render()
    {
        return view('livewire.promoter-edit');
    }
}
