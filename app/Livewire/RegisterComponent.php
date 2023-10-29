<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Activity;

class RegisterComponent extends Component
{
    public $activity;

    public function mount(Activity $activity)
    {
        $this->activity = $activity;
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

    public function render()
    {
        return view('livewire.register-component');
    }
}
