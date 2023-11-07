<form wire:submit="save" class="h-96">
    <input type="file" wire:model="photo" wire:change="fileSet">
 
 
    <button type="submit" :disabled="{{!$photoIsUploaded}}" >Save photo
        @if(!$photoIsUploaded)
        <span class="{{ !$photoIsUploaded && !$isPhoto ? 'hidden' : ''}}">
        <i class="fa fa-spinner fa-spin"></i>
        </span>
        @endif
    </button>
    <div wire:loading wire:target="!photoIsUploaded">Téléchargement en cours...</div>
</form>