



var Mymap =  L.map('mapid').setView([49.443232, 1.099971], 12);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW9yaWxsb243NiIsImEiOiJjanB3ZnE1ZWswdGpmNDNtbXhnczY4Z2RlIn0.jllLxiQNME56CdtUOnBtBw'
}).addTo(Mymap);




//jcdecaux api



// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

/////////////////////////////////////////




// API Decaux les stations sur Rouen
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Rouen&apiKey=61e6498f5032a496216429ab1668b980cbccb832", function(data) {


//////////////////////////////////////////////////////////////
var stations = JSON.parse(data);


stations.forEach(function(station) {
    var nom = station.name;
    var adresse = station.address;
    var position = station.position;
    var lat = position.lat;
    var lng = position.lng;
    var marker = L.marker([position.lat, position.lng ]).addTo(Mymap); 
     
    var $localisation = $("#localisation");
    var $nomStation = $("#nomstation");
    var $statut = $("#statut");
    var $totalVelo =$("totalvelo")
    var $dispo =$("dispo")
    var $reserver =$("reserver")
//alert(station.name)

    marker.addEventListener("click", function () {

       $("#localisation").text(adresse)
       $("#nomstation").text(nom)
       $("#statut").text(station.status)
       $("#totalvelo").text(station.available_bike_stands)
       $("#dispo").text(station.available_bikes)
        self.location.hash= '#nomstation';
    
       
    })

})

})













