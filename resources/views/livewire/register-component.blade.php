<!-- Section des participants -->
<div class="mt-12 mb-4">
    <h2 class="text-white text-lg font-bold">Participants {{ $activity->registeredUsers->count() }} / {{$activity->participants_number}} </h2>
    
    <!-- Bulles des avatars des participants -->
    <div class="flex flex-wrap mt-4">
        @foreach($activity->registeredUsers as $user)
            <!-- Bulles avec les photos des utilisateurs -->
            <div class="flex space-x-2 overflow-x-auto">
                <div class="w-12 h-12 bg-white rounded-full">
                    <img src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Participant" class="w-full h-full rounded-full object-cover">
                </div>
            </div>
        @endforeach
    </div>
    
    
   

    <div class="mt-8 mb-12 ">
        <!-- Bouton d'inscription/désinscription -->
        @if($activity->registeredUsers->contains(auth()->id()))
            <button wire:click="toggleRegistration" class="bg-red-500 text-white  px-4 py-2 rounded-3xl">Se désinscrire</button>
        @elseif($activity->registeredUsers->count() < $activity->participants_number)
            <button wire:click="toggleRegistration" class="bg-green px-4 py-2 rounded-3xl text-white  font-bold w-36 shadow-lg">S'inscrire</button>
        @else
            <button disabled class="bg-gray-500 text-white  px-4 py-2 rounded-3xl cursor-not-allowed">Inscriptions complètes</button>
        @endif
    </div>
</div>
