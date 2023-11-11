<div class="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-blue-light to-blue-dark">
    @if($geolocationDenied && !$queryLoading)
    <!-- Ajoutez un message d'erreur qui s'affiche lorsque la géolocalisation est refusée -->
    <div class="grow z-50">
        <div class="alert alert-danger p-4 bg-slate-50 rounded-xl shadow-lg w-56">
            <p class="mb-4">{{$text}}</p>
            
            @if($showInputCity)
            <div class="bg-slate-100 p-8 z-50 relative rounded-xl">
                <input type="text" name="city" wire:model="city" wire:keydown.enter="getCity" >
            </div>
            @else
            <button class="bg-slate-100 rounded-xl px-4 py-2 mt-4" @click="$dispatch('retry-geolocation')">{{$buttonText}}</button>
            @endif
        </div>
    </div>    
    @else
    <i class="fa-solid fa-spinner fa-spin-pulse text-3xl text-blue-lagon"></i>
    @endif
</div>