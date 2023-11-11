<!-- location-component.blade.php -->

<div>
    @if($positionFound || Session::has('filter-active'))
    <livewire:activity-component  :latitude="$latitude" :longitude="$longitude"/>
    @else
        <livewire:offline-loading /> 
    @endif

    
</div>

<script>
    document.addEventListener('livewire:initialized', () => {
        const hasLatitude = @json(session()->has('latitude'));
        const hasLongitude = @json(session()->has('longitude'));
        const hasFilter = @json(session()->has('filter'));
        /*
        @this.on('filter-apply', (event) => {
           // ...
           console.log(event);
       });
       */
       if(!hasLatitude && !hasLongitude && !hasFilter)
       {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    // L'utilisateur a autorisé l'accès à la géolocalisation
                    @this.dispatch('location-retrieved', { 
                        latitude: position.coords.latitude, 
                        longitude: position.coords.longitude,
                        positionFound: true,
                    });
                }, (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        // L'utilisateur a refusé l'accès à la géolocalisation
                        @this.dispatch('geolocation-denied', {
                            positionFound: false,
                            geolocationDenied : true,
                        });
                    }
                });
            }
        }
    });


</script>




