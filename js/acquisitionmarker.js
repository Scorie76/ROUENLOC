// Appel Ajax sur l'URL de Rouen


class Markeracqui{

    constructor ( posi ,nomStation,statut, totalv, dispo, reserver){
        this.posi = posi;
        this.nomStation = nomStation;
        this.statut = statut;
        this.totalv = totalv;
        this.dispo = dispo;
        this.reserver = reserver;
        this.appel = AcquisitionDonnees.ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Rouen&apiKey=61e6498f5032a496216429ab1668b980cbccb832", function(data) {
        var stations = JSON.parse(data)



            stations.forEach(function(station) {
                var nom = station.name;
                var adresse = station.address;
                var position = station.position;
                var lat = position.lat;
                var lng = position.lng;
                var marker = L.marker([position.lat, position.lng ]).addTo(carteRouen.Mymap);
                var redIcon = new L.Icon({
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
        // Au clic dur marqueur : remplissage de l'encart détail de la station
                marker.addEventListener("click", function () {
                    reserver.style.display ="block"
                    posi.textContent = adresse
                    nomStation.textContent = nom
                    statut.textContent= station.status
                    totalv.textContent=station.available_bike_stands
                    dispo.textContent = station.available_bikes
                    self.location.hash= '#nomstation';
                    sessionStorage.setItem("Statut",document.getElementById("statut").textContent); 
                    var StatutRecu = sessionStorage.getItem("Statut");

                    //traduction en français du statut de la station
                    if (StatutRecu === "OPEN"){
                        statut.innerHTML ='OUVERTE';
                    }
                    if (StatutRecu === "CLOSED"){
                        statut.innerHTML ='Fermée';
                    }
                }.bind(this));

            });

        });

    }

}

let Acquirouenloc = new Markeracqui (

    document.getElementById('localisation'),
    document.getElementById('nomstation'),
    document.getElementById('statut'),
    document.getElementById('totalvelo'),
    document.getElementById('dispo'),
    document.getElementById('reserver'),
    );