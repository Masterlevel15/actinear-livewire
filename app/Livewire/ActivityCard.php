<?php

namespace App\Livewire;

use Livewire\Component;

class ActivityCard extends Component
{
    public $activity, $activities, $imageUrl;

    public function mount()
    {
        $this->getImage();
    }
    public function getImage()
    {
        $image = $this->activity->image; // Supposons que c'est ainsi que vous accédez à votre champ image

        // Vérifier si l'image contient un chemin complet (une URL)
        if (preg_match('/^https?:\/\//', $image)) {
            // C'est une URL, vous pouvez l'utiliser directement dans la balise <img>
            $this->imageUrl = $image;
        } else {
            // C'est un nom de fichier, vous devez construire le chemin
            // En supposant que vos images sont stockées dans le répertoire 'storage/app/public/images'
            $this->imageUrl = asset('images/' . $image);
        }
    }
    public function render()
    {
        return view('livewire.activity-card');
    }
}
