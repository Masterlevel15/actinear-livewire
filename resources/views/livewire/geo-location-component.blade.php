<!-- location-component.blade.php -->

<div>
    <!-- Titre "Activités à proximité" -->
    <h2 class="text-2xl font-bold text-left mt-16 mb-8  pl-[3.75vh] text-white">Activités à proximité</h2>
    @if($latitude && $longitude)
    <livewire:activity-component  :latitude="$latitude" :longitude="$longitude"/>
    @else
    <livewire:loading /> 
    @endif
    <p>Latitude: {{ $latitude }}</p>
    <p>Longitude: {{ $longitude }}</p>
    @livewireScripts
</div>

<!--
<script>
    document.addEventListener('livewire:initialized', () => {
        @this.getResponse('vdjdjjs'); 
    });

    /*
    document.addEventListener('livewire:init', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                    let data = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
};
@this.dispatch('post', data);

                        
                    },
                    function (error) {
                        console.error('Erreur lors de la récupération de la position', error);
                    }
                );
            } else {
                console.error('La géolocalisation n\'est pas supportée par ce navigateur.');
            }
    }) 
    */
</script>
-->

<script>
    document.addEventListener('livewire:initialized', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                @this.dispatch('location-retrieved', { 
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude 
                });
            });
        }
    });
</script>



