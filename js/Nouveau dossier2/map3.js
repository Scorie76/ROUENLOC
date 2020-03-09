
// Objet carte Rouen Mapbox
class Carte{
    constructor(mapid){
        this.mapid = mapid;

        this.Mymap =  L.map('mapid').setView([49.443232, 1.099971], 12);
    }


}

let carteRouen = new Carte (
        document.getElementById('timer'),
    );










