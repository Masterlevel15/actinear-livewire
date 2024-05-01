<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;

class RegisterComponent extends Component
{
    public $activity;
    public $photoUrl;

    public function mount(Activity $activity)
    {
        $this->activity = $activity;
        $this->getPromoterPhoto();
    }

    public function toggleRegistration()
    {
        if(!auth()->check())
        {
            $this->redirect('/register');
            
        }
        else
        {
            // Si l'utilisateur est déjà inscrit, le désinscrire
            if ($this->activity->registeredUsers->contains(auth()->id())) {
            $this->activity->registeredUsers()->detach(auth()->id());
            } else {
            // Si le nombre d'inscrits n'a pas atteint la limite, inscrire l'utilisateur
                if ($this->activity->registeredUsers->count() < 1) {
                    $this->activity->registeredUsers()->attach(auth()->id());
                } else {
                    // Sinon, envoyer un message d'erreur à l'utilisateur
                    session()->flash('error_message', 'La limite de participants a été atteinte pour cette activité.');
                }
            }
            $this->activity->refresh();
        }
    }

    public function getPromoterPhoto()
    {
        $image = $this->activity->promoter->photo;

        // Vérifier si l'image contient un chemin complet (une URL)
        if (preg_match('/^https?:\/\//', $image)) {
            // C'est une URL, vous pouvez l'utiliser directement dans la balise <img>
            $this->photoUrl = $image;
        } else if($image !== null) {
            // C'est un nom de fichier, vous devez construire le chemin
            // En supposant que vos images sont stockées dans le répertoire 'storage/app/public/images'
            $this->photoUrl = asset('images/' . $image);
        }
        else
        {
            $this->photoUrl = 'https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E';
        }
    }

    public function render()
    {
        return view('livewire.register-component');
    }
}
