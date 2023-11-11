<div class="fixed inset-0 z-50 bg-gradient-to-b from-blue-light to-blue-dark flex items-center justify-center">
        <!-- Ajoutez un message d'erreur qui s'affiche lorsque la géolocalisation est refusée -->
            <div class="bg-slate-50 p-4 mx-2 rounded-xl shadow-lg" style="
    margin-left: 10px;
    margin-right: 10px;
">
                <p class="mb-4">{{$text}}</p>
                @if($showInputCity)
                <div class="bg-slate-100 p-8 z-50 relative rounded-xl">
                    <input type="text" name="city" wire:model="city" wire:keydown.enter="queryCity" >
                </div>
                @if (session('city-not-found'))
                <div class="alert alert-success">
                    {{ session('city-not-found') }}
                </div>
                @endif 
                @else
                <button class="bg-slate-100 rounded-xl px-4 py-2 mt-4" @click="$dispatch('retry-geolocation')">{{$buttonText}}</button>
                @endif
            </div>

       
</div>