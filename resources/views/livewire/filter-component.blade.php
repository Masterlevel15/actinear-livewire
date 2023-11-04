<div class="space-y-6 px-8 py-[8.7vh] bg-blue-lagon ">
    <!-- Bandelette-->
    <div class="absolute top-0 left-0 w-full h-12 bg-black bg-blue-light2 flex items-center justify-between px-[1.8vh] py-[4vh]">
        <!-- Icône flèche à gauche -->
        <button onclick="goBack()">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path></svg>
        </button>
            <!-- Icônes dans des bulles blanches à droite -->
                <!-- Icône ReInit-->
                <div class=" w-[5vh] h-[5vh] bg-white p-2 rounded-full flex items-center justify-center mr-4">
                    <i class="fa-solid fa-xmark"></i>
                </div>
    </div>
    <!--SearchBar-->
    <livewire:search-bar-component  :table="'City'"/>
    <!--slider  -->
    <div wire:key="stableKey">
        <livewire:range-slider wire:model="sliderValue" />
    </div>
    <div>Distance choisie: {{ $sliderValue }} km</div>
    <!--séparation-->
    <hr class="h-[0.05vh] my-8 bg-[#E5E7EB] border-0 dark:bg-gray-300">
    <!-- Tri par distance et par date -->
    <div class="flex space-x-2 mr-6">
            @foreach($settings as $setting)
                <div class="flex-col items-center space-y-2">
                    <div class="flex">
                        <i class="fa-solid fa-arrow-right-arrow-left fa-rotate-90 mr-4 fa-xs"></i>
                        <span class="text-sm font-semibold">{{$setting['title']}}</span>
                    </div>
                    <button 
                    wire:click.stop="toggleSetting({{ $setting['id']}})"
                    class="{{ $setting['active'] ? 'bg-blue-light text-white font-semibold' : 'bg-[#CEE6E7] text-slate-800' }} py-3 px-4 rounded-lg text-xs border border-blue-light">
                    {{$setting['name']}}
                    </button>
                </div>
            @endforeach
       
    </div>
    <!--séparation-->
    <hr class="h-[0.05vh] my-8 bg-[#E5E7EB] border-0 dark:bg-gray-300">

    <!-- Catégories -->
    <div>
        <div class="flex items-center mb-4 space-x-2">
            <i class="fa-solid fa-tag"></i>
            <span class="text-sm font-semibold block"> Catégories</span>
        </div>
        <div class="grid grid-cols-4 gap-3 text-xs mr-8">
        @foreach($categories as $category)
            <button
            wire:key="{{ $category->id }}" 
            wire:click.stop="toggleCategory({{ $category->id }})" 
            class="{{ in_array($category->id, $selectedCategories) ? 'bg-blue-light text-white font-semibold' : 'bg-[#CEE6E7] text-slate-800 border border-blue-light' }} bg-[#CEE6E7] text-slate-800 border border-blue-light w-auto py-2 px-2 rounded-lg text-xs truncate">
            {{ $category->name }}
            </button>
        @endforeach    
            <button class="w-20 py-2 px-2 border rounded-lg truncate">Autre</button>
        </div>
    </div>
    <!--séparation-->
    <hr class="h-[0.05vh] my-8 bg-[#E5E7EB] border-0 dark:bg-gray-300">

    <!-- Bouton pour voir les activités -->
    <div class="text-center">
        <button class="w-full text-white hover:bg-blue-light focus:ring-4 focus:outline-none focus:ring-blue-300
    font-medium rounded-lg text-sm px-4 py-2 bg-blue-light
    focus:text-blue-light focus:bg-blue-light2 
    focus:ring-blue-light">Search</button>
    </div>
</div>

<script>
    function goBack() {
        window.history.back();
    }
</script>
