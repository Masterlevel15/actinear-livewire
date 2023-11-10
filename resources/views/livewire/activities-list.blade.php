<div>
    <!-- En-tête avec titre de l'application -->
    <h1 class="text-4xl font-bold text-left my-[6.5vh]  text-white pl-[3.75vh]">
        <a href="{{ route('homepage') }}">
            Actinear
        </a>
    </h1>
    <div class="flex items-center justify-between pr-[4.5vh] text-white pl-[3.75vh] pb-[3vh]">
        <livewire:search-bar-component :table="'Activity'"/>
        <!-- Icône filtre -->
        <a href="{{ route('filter') }}">
            <i class="fa-solid fa-filter fa-flip-horizontal text-xl"></i>
        </a>
        <!-- Icône carte -->
        <a href="{{ route('map') }}">
            <i class="fa-solid fa-map text-xl"></i>
        </a>
    </div>
    <!--Activités-->
    <div class="my-14 flex-col space-y-8 px-8">
    @foreach($activities as $activity)
        <livewire:activity-card :activity="$activity" />
    @endforeach
    </div>
</div>
