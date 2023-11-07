<div>
    <div class="relative">
        <!-- Image en arrière-plan (à remplacer par votre URL d'image) -->
        <img src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Background Image" class="w-full h-96 object-cover">

        <!-- Bandelette transparente -->
        <div class="absolute top-0 left-0 w-full h-12 bg-black bg-opacity-50 flex items-center justify-between px-[1.8vh] py-[4vh]">
            <!-- Icône flèche à gauche -->
            <button onclick="goBack()">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path></svg>
            </button>
            <!-- Icônes dans des bulles blanches à droite -->
            <div class="flex space-x-[2vh] pr-2">
                <!-- Icône Bookmark -->
                <livewire:bookmark-component :activity="$selectedActivity" />
                <!-- Icône edit-->
                <div class=" w-[5vh] h-[5vh] bg-white p-2 rounded-full flex items-center justify-center">
                <i class="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
        </div>

        <!-- Titre et rectangle blanc en bas à gauche de l'image -->
        <div class="absolute bottom-4 left-7">
            <!-- Titre en blanc -->
            <h1 class="text-white text-lg font-bold">{{$selectedActivity->title}}</h1>
            
            <!-- Rectangle blanc avec icône et texte -->
            <div class="mt-2 bg-white px-2 py-[0.8vh] rounded-lg flex items-center space-x-2 w-36">
                <!-- Icône de marker -->
                <i class="fa-solid fa-location-dot text-green ml-1"></i>
                
                <!-- Localité et distance en km -->
                <span class="text-green text-sm">{{$selectedActivity->city->name}}, {{$selectedActivity->distance}}Km</span>
            </div>
        </div>
    </div>
    <!-- Bandelette date + localité -->
    <div class="w-full bg-blue-gray py-4 flex items-center justify-between px-4">
        <!-- Date du côté gauche -->
        <span class="text-white text-md ml-2">11 Novembre</span>

        <!-- Catégorie dans un rectangle arrondi blanc du côté droit -->
        <div class="bg-white px-2 py-1 text-sm rounded-[1.5vh] mr-4">
            <span class="text-[#006666]">{{$selectedActivity->category->name}}</span>
        </div>
    </div>

    <div class="px-4 mt-16">
    <!-- Titre en blanc avec une taille de police plus grande -->
    <h2 class="text-white text-2xl font-bold">{{$selectedActivity->title}}</h2>

    <!-- Espacement vertical important -->
    <div class="mt-6">
        <!-- Date en taille de police discrète -->
        <p class="text-white text-sm">11 Novembre</p>

        <!-- Espacement vertical -->
        <div class="mt-4">
            <!-- Paragraphe avec une taille de police plus grande que la date -->
            <p class="text-white text-lg">
                {{$selectedActivity->description}}
                Cette randonnée vous fera perdre la tête! De cours d'eau enchanteurs aux sommets ravissants, vous serez revigorés par cette balade d'un charme authentique.
            </p>
        </div>
    </div>

    <!-- Espacement important en dessous du paragraphe -->
    <div class="mt-12 flex items-center">
        <!-- Icône d'adresse -->
        <i class="fa-solid fa-location-dot mr-2 text-4xl text-green"></i>
        <!-- Adresse -->
        <p class="text-white text-sm">{{$selectedActivity->address}}, 17, {{$selectedActivity->city->zip_code}} {{$selectedActivity->city->name}}</p>
    </div>
     <!-- Carte -->
    <div id="map" class="mt-8 border rounded-lg h-48 bg-white" data-latitude="{{$selectedActivity->latitude}}" data-longitude="{{$selectedActivity->longitude}}">
        Map HERE
    </div>
    <!-- Espace après la carte -->
    <div class="mt-12">

        <!-- Organisé par -->
        <div class="text-left mb-4">
            <p class="text-sm text-white">Organisé par</p>
            
            <!-- Bulle avec le profil de l'organisateur -->
            <div class="my-3 ml-2 w-14 h-14 inline-block bg-white rounded-full">
                <img src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Organisateur" class="w-full h-full rounded-full object-cover">
            </div>
            
            <!-- Nom de l'organisateur -->
            <p class="text-md text-white">{{$selectedActivity->promoter->name}}</p>
            
            <!-- Étoiles d'évaluation -->
            <div class="">
                @php
                    $averageRating = $selectedActivity->promoter->averageRating() ?? 0;
                @endphp

                @for ($i = 1; $i <= 5; $i++)
                    @if ($i <= $averageRating)
                        <i class="fa-solid fa-star text-yellow-400"></i>
                    @else
                        <i class="fa-solid fa-star text-slate-50"></i>
                    @endif
                @endfor
            </div>

            <div class="mt-8 mb-12 ">
                <a href="{{ route('promoter-profile', $selectedActivity->promoter->id) }}" class="bg-green px-4 py-2 rounded-3xl text-white font-bold w-48 shadow-lg block text-center">Noter l'organisateur</a>
            </div>
        </div>

        <!-- Section des participants -->
        <div class="mt-12 mb-4">
            <p class="text-white text-sm mb-2">158/{{$selectedActivity->participants_number}} participants</p>
            
            <!-- Bulles avec les photos des utilisateurs -->
            <div class="flex space-x-2 overflow-x-auto">
                <!-- Remplacez URL_DE_LA_PHOTO avec l'URL de la photo de chaque utilisateur -->
                <div class="w-12 h-12 bg-white rounded-full">
                    <img src="https://fastly.picsum.photos/id/238/450/200.jpg?hmac=vy5OV4OwcfPBsjgLtZks97bfoIEBProUzHqGcLgmz5E" alt="Participant" class="w-full h-full rounded-full object-cover">
                </div>
                <!-- Répétez cette div pour chaque utilisateur -->
            </div>
        </div>

        <!-- Bouton S'inscrire -->
        <div class="mt-8 mb-12 ">
            <button class="bg-green px-4 py-2 rounded-3xl text-white  font-bold w-36 shadow-lg">S'inscrire</button>
        </div>
    </div>
    
    @if (session()->has('error_message'))
        <div class="bg-red-500 text-white p-4 rounded mt-4">
            {{ session('error_message') }}
        </div>
    @endif
    <livewire:register-component :activity="$selectedActivity" />


</div>

</div>

<script>
    function goBack() {
        window.history.back();
    }
    console.log(document.getElementById('map').dataset.latitude);
    

    // initialisation de la map
    var latitude = document.getElementById('map').dataset.latitude;
    var longitude = document.getElementById('map').dataset.longitude;

    map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
</script>
