var pgrafo = document.getElementById("grafo");

function getposition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showposition);
    }
}

function showposition(position) {
    pgrafo.innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;
}
getposition()
