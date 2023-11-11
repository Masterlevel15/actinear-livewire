
<!-- Card 1 -->
<div class="bg-blue-gray rounded-xl overflow-hidden shadow-lg flex flex-col min-w-[45vh]">
    <!-- Image -->
    <div class="relative h-40">
      <img src="{{$imageUrl}}" alt="Image de l'activité" class="w-full h-full object-cover rounded-t-lg">
      <!-- Rectangle avec nom de la catégorie -->
      <a href="{{ route('activities-by-category', ['categoryId' => $activity->category->id ]) }}">
        <div class="absolute top-0 left-0 bg-white text-blue-gray py-1 px-2 rounded-lg text-xs mt-2 ml-2">
        {{ $activity->category->name }}
        </div>
      </a>
      <!-- Bulle de bookmark -->
      <div class="absolute top-0 right-0 mt-2 mr-2">
        <div class="bg-white text-blue-gray rounded-full w-[5vh] h-[5vh] flex items-center justify-center">
          <livewire:bookmark-component :activity="$activity" />
        </div>
      </div>
      <!-- Date (jour et mois) -->
      <div class="absolute bottom-1 right-[0.5vh] bg-slate-500  w-[18vh] h-[4vh] opacity-30 rounded-lg"></div>
      <div class="absolute bottom-0 right-0 mb-2 mr-2 text-slate-50 ">
        {{ $activity->date->format('d F Y') }}
      </div>
    </div>

    <!-- Contenu de la card -->
    <div class="p-4 ">
      <!-- Titre -->
      <h3 class="text-2xl text-slate-50">{{$activity->title}}</h3>
      <!-- Lieu et distance -->
      <div class="flex items-center mt-2 text-green2">
        <i class="fa-solid fa-map-marker-alt"></i>
        <span class="ml-1">{{ $activity->city->name }}, {{ number_format($activity->distance, 0); }} km</span>
      </div>
      <!-- Utilisateur et notation -->
      <a href="{{ route('promoter-profile', $activity->promoter->id) }}">
      <div class="flex items-center mt-2 text-slate-50">
        <i class="fa-solid fa-user"></i>
        <span class="ml-1">{{$activity->promoter->name}}</span>
      

        <div class="ml-2 text-[2vh]">
          <!-- Note étoiles (adapter le nombre d'étoiles en fonction de la notation) -->
          @php
            $averageRating = $activity->promoter->averageRating() ?? 0;
          @endphp

          @for ($i = 1; $i <= 5; $i++)
              @if ($i <= $averageRating)
                <i class="fa-solid fa-star text-yellow-400"></i>
              @else
                <i class="fa-solid fa-star text-slate-50"></i>
              @endif
          @endfor
        </div>
      </div>
      </a>
      <!-- Participants -->
      <div class="flex items-center mt-2 text-slate-50">
        <i class="fa-solid fa-user"></i>
        <span class="ml-1">Participants {{ $activity->registeredUsers->count() }} / {{$activity->participants_number}} </span>
      </div>
    </div>
    <!-- Bouton "Info" -->
    <div class="text-center mb-[4vh] mt-2">
      <a href="{{ route('activity-details', ['id' => $activity->id] ) }}" class="bg-green rounded-full px-8 py-2 text-slate-50" wire:navigate>Infos</a>
    </div>

</div>

