if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // Envoyez les données de latitude et longitude au serveur ici
    });
} else {
    console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
}
