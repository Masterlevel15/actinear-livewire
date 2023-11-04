<!-- Champ de recherche -->
<div class="bg-[#CEE6E7] p-0 rounded-[1.5vh] flex items-center relative">
    <input type="text" placeholder="Rechercher par localité"
        id="searchBar" class="bg-transparent border-none focus:outline-none flex-grow ml-2" wire:model="searchQuery" wire:keydown="searchResult">
        
        @if (collect($suggestions)->isNotEmpty())
        <ul class="absolute bg-white border border-gray-300 rounded-lg mt-2 left-0 right-0 z-10" style="top: 2rem;" id="suggestions"> <!-- Ajustez la valeur '2.5rem' en fonction de la hauteur de votre input -->
            @foreach ($suggestions as $suggestion)
            
                <li class="p-2 hover:bg-gray-100 text-black" wire:click="selectSuggestion('{{ json_encode($suggestion)  }}')">{{ $suggestion->name }}</li>
            @endforeach
        </ul>

        @endif
</div>