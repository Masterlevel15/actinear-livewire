<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\User;

class PromoterProfile extends Component
{
    public $id, $promoter;

    public function mount($promoterId)
    {
        $this->id = $promoterId;
        $this->promoter =  User::find($promoterId);
    }


    public function render()
    {
        return view('livewire.promoter-profile');
    }
}
