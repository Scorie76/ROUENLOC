
// Objet carte Rouen Mapbox
class Carte{
    constructor(mapid , Mymap){
        this.mapid = mapid;
        this.Mymap =  Mymap;
    }
}

let carteRouen = new Carte (
        document.getElementById('mapid'),
        L.map('mapid').setView([49.443232, 1.099971], 12),
);










