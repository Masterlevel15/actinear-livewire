<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;


class FileUploadComponent extends Component
{
    use WithFileUploads;

    public $photo;
    public $isPhoto = false;
    public $photoIsUploaded = false;

    public function updatedPhoto()
    {
        if ($this->photo->isValid()) {
            $this->photoIsUploaded = true;
            $this->isPhoto = false;
        }
    }   
    public function fileSet()
    {
        $this->photoIsUploaded = false;
        $this->isPhoto = true;
    }
    public function save()
    {
        //dd($this->photo);
        try {
            $filename = $this->photo->getClientOriginalName(); // Assurez-vous de nettoyer le nom de fichier
            $this->photo->storeAs('/images', $filename, 'public_uploads');
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
    public function render()
    {
        return view('livewire.file-upload-component');
    }
}
