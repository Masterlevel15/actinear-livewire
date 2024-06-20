<!-- Champ de recherche -->
<div class="bg-[#CEE6E7] p-0 rounded-[1.5vh] flex items-center relative">
    <!-- Icône loupe -->
    <i class="fa fa-search ml-4 text-slate-600"></i>
    <input type="text" placeholder="Recherche par activité..."
        id="searchBar" class="bg-transparent border-none focus:outline-none flex-grow ml-2" wire:model.live="searchQuery" wire:keydown="searchResult">
        
        @if (collect($suggestions)->isNotEmpty())
        <ul class="absolute bg-white border border-gray-300 rounded-lg mt-2 left-0 right-0 z-10" style="top: 2rem;" id="suggestions"> <!-- Ajustez la valeur '2.5rem' en fonction de la hauteur de votre input -->
            @foreach ($suggestions as $suggestion)
                @if($table === 'Category')
                <a href="{{ route('activities-by-category', ['categoryId' => $suggestion->id] ) }}">
                    <li class="p-2 hover:bg-gray-100 text-black" >{{ $suggestion->name }}</li>
                </a>
                @else
                <a href="{{ route('activity-details', ['id' => $suggestion->id] ) }}">
                    
                    <li class="p-2 hover:bg-gray-100 text-black" >{{ $suggestion->title }}</li>     
                </a>
                @endif
            @endforeach
        </ul>

        @endif
</div>