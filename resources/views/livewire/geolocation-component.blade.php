<!-- location-component.blade.php -->

<div>
    <!--
    <div>
    latitude: {{ $latitude}}
    longitude: {{ $longitude}}
    </div>
    -->
    @if(($positionFound || Session::has('filter-active')) && !Session::has('loading-active'))
        <livewire:header :latitude="$latitude" :longitude="$longitude"/>
        <livewire:activity-component :latitude="$latitude" :longitude="$longitude" wire:ignore/>
    @elseif(Session::has('geolocation-denied') && !Session::has('geolocation-offline') )
        <livewire:geolocation-offline /> 
    @else
        <livewire:loading /> 
    @endif
    
</div>

<script>
    document.addEventListener('livewire:initialized', () => {
        const hasFilter = @json(session()->has('filter'));
        const hasGeolocationOffline = @json(session()->has('geolocation-offline'));
        const hasGeolocationDenied = @json(session()->has('geolocation-denied'));
        
        
       if(!hasFilter)
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
                        if(!hasGeolocationDenied)
                        {
                            console.log(hasGeolocationDenied);
                             @this.dispatch('geolocation-position-denied', {
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