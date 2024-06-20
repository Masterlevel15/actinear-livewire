<div id="map-component" x-data="" x-init="" data-activities="{{$activities}}" data-distance="{{$distance}}">
    <div id="loader" wire:ignore>
        <livewire:loading  />
    </div>
    <!-- Contenu principal-->
    <div  id="map" class="relative w-full h-screen z-0" wire:ignore>Map</div>
    <!-- Slider-->
    <div id="distance-slider-container" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg z-10 mb-16" >
    
             <div id="distance" class="fixed left-1/2 -translate-x-1/2 -top-full transform-gpu -translate-y-2 bg-white p-2 rounded shadow">
             
             {{$distance}} KM
            </div>
            <input type="range" id="distance-slider" min="0" max="7000" class="w-48" 
            value='{{$distance}}' 
            wire:model="sliderValue" wire:change="handleInputChange">
        </div>
</div>


<!--
<script>


if ("geolocation" in navigator) {
    const loader = document.querySelector('#loader');
    
    // Obtenez la position de l'utilisateur
    navigator.geolocation.getCurrentPosition(function(position) {
        // Les coordonnées de latitude et de longitude sont disponibles dans position.coords
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Utilisez les coordonnées comme vous le souhaitez (par exemple, affichage sur une carte)
        var map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        loader.classList.add('hidden');

        // Slider
        var rangeSlider = document.getElementById('distance-slider');

        var distance = document.getElementById('map-component').dataset.distance;
        console.log(distance);

        rangeSlider.value = distance;

        var result = document.getElementById('distance').innerHTML = `${distance} KM`; 

        var activities = JSON.parse(document.getElementById("map-component").dataset.activities);
        console.log(activities);

        var markers = [];
        //
        L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`${50} A pretty CSS popup.<br> Easily customizable.`)
        .openPopup();

        
        console.log("Latitude : " + latitude);
        console.log("Longitude : " + longitude);

        var circle = L.circle([latitude, longitude], {
            radius: distance * 1000, //Rayon initial en mètres (200 km)
            });
            // Ajoutez le cercle à la carte
            circle.addTo(map);

        rangeSlider.onchange = function()
        {   
            var newDistance = rangeSlider.value;

            /*
            var marker;
    
            activities = JSON.parse(document.getElementById("map-component").dataset.activities);

            //marker
            markers.forEach(marker => {
                map.removeLayer(marker);
            });
            
            markers = [];

            activities.forEach(function(activity) {
            var marker = L.marker([activity.latitude, activity.longitude]).addTo(map);
            markers.push(marker);
            });
            */

            // Supprimez l'ancien cercle de la carte
            map.removeLayer(circle);

            // Créez un nouveau cercle avec la nouvelle distance
            circle = L.circle([latitude, longitude], {
                radius: newDistance * 1000, // Convertissez la distance en mètres
            });

            // Ajoutez le nouveau cercle à la carte
            circle.addTo(map);

            // Mettez à jour la valeur de Livewire avec la nouvelle distance
    
            //circle

            

            //document.getElementById('distance').innerHTML = `${rangeSlider.value} KM`
            
            console.log(rangeSlider.value);
        };
      

        
    });
    
} else {
    console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
}

document.addEventListener('livewire:initialized', () => {
       @this.on('sendActivities', (event) => {
           var newActivities = event[0].activities;
           console.log('bkb');
           //L.marker(56, 4]).addTo(map); 
           updateMapWithActivities(newActivities);   
            
       });
       function updateMapWithActivities(activities) {
           console.log(activities);
         L.marker(56, 4]).addTo(map); 
    }
});

/*
            var markers = [];
            markers.forEach(marker => {
                map.removeLayer(marker);
            });
            for(let i = 0; i <= newActivities.length; i++)
            {
                
                var marker = L.marker([newActivities[i].latitude, newActivities[i].longitude]).addTo(map); 
                

                markers.push(marker);
            }
            */
    
</script>
        -->


<script>
  document.addEventListener('livewire:initialized', () => {
    var activityDetailsBaseUrl = "{{ url('activity-details') }}";
    var baseImagePath = @json(asset('images'));
  let markers = []; // Déclarez une variable markers en dehors de la fonction
  let map;
  const rangeSlider = document.getElementById('distance-slider');
  let circle;
  let latitude;
  let longitude;
  let locationRetrieved = Boolean;
  const hasGeolocationOffline = @json(session()->has('geolocation-offline'));
  const hasGeolocationDenied = @json(session()->has('geolocation-denied'));
  const hasActivitiesByCategory= @json(session()->has('ActivitiesByCategory'));
  
  if(Array.isArray(event))
  {
    var activities = JSON.parse(document.getElementById("map-component").dataset.activities);
  }
  else
  {
    var activities = Object.entries(JSON.parse(document.getElementById("map-component").dataset.activities)).map(([id, details]) => ({
            id: parseInt(id),
            ...details
        }));
  }

  if(hasGeolocationOffline && hasGeolocationDenied)
  {
    latitude = @json($latitude);
    longitude = @json($longitude);
    locationRetrieved = true;
  }
  //console.log(@json($latitude));
  //console.log(@json($longitude));
  @this.on('sendActivities', (event) => {
      var newActivities = Object.entries(event[0].activities).map(([id, details]) => ({
        id: parseInt(id),
        ...details
      }));
    
    updateMapWithActivities(newActivities);
    addDistanceRange();
  });
  /*
  @this.on('sendActivities', (event) => {
    var newActivities = event[0].activities;
    updateMapWithActivities(newActivities);
    addDistanceRange();
  });
  */

  

  // Code pour initialiser la carte ici...
  if ("geolocation" in navigator && !hasGeolocationDenied) {
    
    const loader = document.querySelector('#loader');
    // Obtenez la position de l'utilisateur
    navigator.geolocation.getCurrentPosition(function(position) {
        // Les coordonnées de latitude et de longitude sont disponibles dans position.coords
         latitude = position.coords.latitude;
         longitude = position.coords.longitude;
        
        //Envoi coords vers serveurs
        /*
        @this.dispatch('coords-retrieved', { 
                            latitude: position.coords.latitude, 
                            longitude: position.coords.longitude,
                        });
        */
        // Utilisez les coordonnées comme vous le souhaitez (par exemple, affichage sur une carte)
        map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        loader.classList.add('hidden');
        
        // Reste du code d'initialisation de la carte...
        //console.log(document.getElementById("map-component").dataset);
        
        // Appel initial pour afficher les marqueurs des activités
        //var activities = JSON.parse(document.getElementById("map-component").dataset.activities);
        updateMapWithActivities(activities);
        addDistanceRange();
        
      });
  } else {
    console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
    if(locationRetrieved)
    {
      map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        loader.classList.add('hidden');

        // Reste du code d'initialisation de la carte...
        // Appel initial pour afficher les marqueurs des activités
        //var activities = JSON.parse(document.getElementById("map-component").dataset.activities);
        updateMapWithActivities(activities);
        addDistanceRange();
    }
  }

  function updateMapWithActivities(activities) {
    // Supprimez les anciens marqueurs de la carte
    
    markers.forEach((marker) => {
      map.removeLayer(marker);
    });
    
    markers = []; // Réinitialisez le tableau de marqueurs

    // Ajoutez les nouveaux marqueurs à la carte
    activities.forEach((activity) => {
      const marker = L.marker([activity.latitude, activity.longitude]).addTo(map);
      //markers.push(marker);
      // Créer un élément de div pour le contenu du popup
      const popupContent = document.createElement('div');

    // Ajouter le titre de l'activité au contenu du popup
    const title = document.createElement('h1');
    title.textContent = activity.title;
    popupContent.appendChild(title);

    // Ajouter l'image de l'activité au contenu du popup
    const image = document.createElement('img');
    image.src = (activity.image && !activity.image.startsWith('http://') && !activity.image.startsWith('https://') ? baseImagePath + '/'  + activity.image : activity.image);
    popupContent.appendChild(image);

    // Ajouter un lien vers la route show de l'activité
    const link = document.createElement('a');
    link.href = `${activityDetailsBaseUrl}/${activity.id}`;
    link.textContent = 'Voir les détails';
    popupContent.appendChild(link);

    // Associer le contenu du popup au marqueur
    marker.bindPopup(popupContent);
    markers.push(marker);
    });
  }

  function addDistanceRange(){
    let newDistance =rangeSlider.value;
    if(circle){
        map.removeLayer(circle);
    }
    
    if (newDistance > 0) {
        circle = L.circle([latitude, longitude], {
            radius: newDistance * 1000, // Convertissez la distance en mètres
        });

        // Ajoutez le cercle à la carte
        circle.addTo(map);
    }

  }
});

</script>
