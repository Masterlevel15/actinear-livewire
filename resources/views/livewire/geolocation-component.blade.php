<!-- location-component.blade.php -->

<div>
    @if(($positionFound || Session::has('filter-active')) && !Session::has('loading-active') )
        <livewire:activity-component  :latitude="$latitude" :longitude="$longitude"/>
    @elseif(Session::has('geolocation-denied') || !Session::has('geolocation-offline') )
        <livewire:geolocation-offline /> 
    @else
        <livewire:loading /> 
    @endif

    
</div>

<script>
    document.addEventListener('livewire:initialized', () => {
        const hasFilter = @json(session()->has('filter'));
        const hasGeolocationOffline = @json(session()->has('geolocation-offline'));

        
       if(!hasFilter)
       {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    // L'utilisateur a autorisé l'accès à la géolocalisation
                    if(!hasGeolocationOffline)
                    {
                        @this.dispatch('location-retrieved', { 
                            latitude: position.coords.latitude, 
                            longitude: position.coords.longitude,
                            positionFound: true,
                        });
                    }
                    else
                    {
                        
                    }
                }, (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        // L'utilisateur a refusé l'accès à la géolocalisation
                        if(!hasGeolocationOffline)
                        {
                            @this.dispatch('geolocation-denied', {
                                positionFound: false,
                            });
                        }
                    }
                });
            }
        }
        if(hasGeolocationOffline)
        {
            //@this.dispatch('start-loading');
            setTimeout(@this.dispatch('stop-loading'), 500);
        }
    });


</script>




