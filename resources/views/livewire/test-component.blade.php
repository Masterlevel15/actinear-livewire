<div class="space-y-6 px-8 py-[13.3vh] bg-blue-lagon">
    
    <!--slider-->
    <livewire:range-slider />
    <!--séparation-->
    <hr class="h-[0.05vh] my-8 bg-[#E5E7EB] border-0 dark:bg-gray-300">
    <!-- Tri par distance et par date -->
    <div class="flex space-x-2 mr-6">
        <div class="flex-col items-center space-y-2">
            <div class="flex">
                <i class="fa-solid fa-arrow-right-arrow-left fa-rotate-90 mr-4 fa-xs"></i>
                <span class="text-sm font-semibold">Tri par date</span>
            </div>
            
        </div>
        <div class="flex-col items-center space-y-2">
            <div class="flex">
                <i class="fa-solid fa-arrow-right-arrow-left fa-rotate-90 mr-4 fa-xs"></i>
                <span class="text-sm font-semibold">Tri par date</span>
            </div>
            
        </div>
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

<!--
        <div class="flex-col items-center space-y-2">
            <div class="flex">
                <i class="fa-solid fa-arrow-right-arrow-left fa-rotate-90 mr-4 fa-xs"></i>
                <span class="text-sm font-semibold">Tri par date</span>
            </div>
            <livewire:toggle-button :content="'Distance croissante'" :class="'py-3 px-4 rounded-lg text-xs'"  wire:key="stableKey"/>
        </div>-->
        
            
            <!--
            <livewire:toggle-button :content="'Date croissante'" :class="'py-3 px-4 rounded-lg text-xs'" :toggleButtonId="'jdbkbd'" wire:key="stableKey"/>-->
