
<!-- Card 1 -->
<div class="bg-blue-gray rounded-xl overflow-hidden shadow-lg flex flex-col min-w-[45vh]">
    <!-- Image -->
    <div class="relative h-40">
      <img src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Image de l'activité" class="w-full h-full object-cover rounded-t-lg">
      <!-- Rectangle avec nom de la catégorie -->
      <div class="absolute top-0 left-0 bg-white text-blue-gray py-1 px-2 rounded-lg text-xs mt-2 ml-2">
        Catégorie
      </div>
      <!-- Bulle de bookmark -->
      <div class="absolute top-0 right-0 mt-2 mr-2">
        <div class="bg-white text-blue-gray rounded-full w-[5vh] h-[5vh] flex items-center justify-center">
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <!-- Date (jour et mois) -->
      <div class="absolute bottom-0 right-0 mb-2 mr-2 text-white">
        18 Sept
      </div>
    </div>

    <!-- Contenu de la card -->
    <div class="p-4 ">
      <!-- Titre -->
      <h3 class="text-2xl text-white">Titre de l'activité</h3>
      <!-- Lieu et distance -->
      <div class="flex items-center mt-2 text-green2">
        <i class="fa-solid fa-map-marker-alt"></i>
        <span class="ml-1">Lieu, 2 km</span>
      </div>
      <!-- Utilisateur et notation -->
      <div class="flex items-center mt-2 text-white">
        <i class="fa-solid fa-user"></i>
        <span class="ml-1">Nom de l'utilisateur</span>
      

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
      <!-- Participants -->
      <div class="flex items-center mt-2 text-white">
        <i class="fa-solid fa-user"></i>
        <span class="ml-1"> /5 Participants</span>
      </div>
    </div>
    <!-- Bouton "Info" -->
    <div class="text-center mb-[4vh] mt-2">
      <a href="#" class="bg-green rounded-full px-8 py-2 text-white">Infos</a>
    </div>

</div>

