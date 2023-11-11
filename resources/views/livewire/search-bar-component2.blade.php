<div class="bg-blue-gray p-0 rounded-[2vh] flex items-center relative">
    <!-- Icône loupe -->
    <i class="fa fa-search ml-4"></i>
    <!-- ... -->
    <!-- Champ de recherche -->
    <input type="text" placeholder="Rechercher..."
    id="searchBar" class="bg-transparent border-none focus:outline-none flex-grow ml-2" wire:model="searchQuery" wire:keydown="searchActivities">

    <!-- Afficher les suggestions dans un rectangle blanc -->
    @if (collect($suggestions)->isNotEmpty())
    
        <ul class="absolute bg-white border border-gray-300 rounded mt-2 left-0 right-0 z-10" style="top: 2rem;" id="suggestions"> <!-- Ajustez la valeur '2.5rem' en fonction de la hauteur de votre input -->
            @foreach ($suggestions as $suggestion)
            <a href="{{ route('activity-details', ['id' => $suggestion['id']]) }}" wire:navigate>
                <li class="p-2 hover:bg-gray-100 text-black" wire:click="selectSuggestion('{{ json_encode($suggestion)  }}')">{{ $suggestion->title }}</li>
            </a>
            @endforeach
        </ul>
    
    @endif
</div>

<script>
/*
    document.getElementById('searchBar').addEventListener('blur', function() {
        document.getElementById('suggestions').style.display = 'none';
    });

    document.getElementById('searchBar').addEventListener('blur', function() {
        document.getElementById('suggestions').style.display = 'none';
    });
*/
</script>