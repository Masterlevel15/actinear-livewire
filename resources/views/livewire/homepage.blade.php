<div class="container">
    
    <!-- En-tête avec titre de l'application -->
    <h1 class="text-4xl font-bold text-left my-[6.5vh]  text-white pl-[3.75vh]">Actinear</h1>
    <div class="flex items-center justify-between pr-[4.5vh] text-white pl-[3.75vh] pb-[3vh]">
        <livewire:search-bar-component/>
        <!-- Icône filtre -->
        <i class="fa-solid fa-filter fa-flip-horizontal text-xl"></i>
        <!-- Icône carte -->
        <i class="fa-solid fa-map text-xl"></i>
    </div>
    <livewire:category-component />
    
    <livewire:geo-location-component />
    
</div>