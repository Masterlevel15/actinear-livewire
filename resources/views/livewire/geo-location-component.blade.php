<!-- location-component.blade.php -->

<div>
    @if($latitude && $longitude || Session::has('filter-active'))
    <livewire:activity-component  :latitude="$latitude" :longitude="$longitude"/>
    @else
        <livewire:loading /> 
    @endif
    <p>Latitude: {{ $latitude }}</p>
    <p>Longitude: {{ $longitude }}</p>
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
        @this.on('filter-apply', (event) => {
           //
           console.log(event);
       });
        if (navigator.geolocation && !@json(session('filter'))) {
            navigator.geolocation.getCurrentPosition((position) => {
                @this.dispatch('location-retrieved', { 
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude 
                });
            });
        }
    });
</script>



