

class ReservationVelo{

    constructor(valider, reserver, annuler,resaencours,temp,canvas,texteResa,effacer,infoBouton,infoBouton2, placenom, placeprenom, dispo, nomstation,localisation,statut,totalvelo) {
        this.valider = valider ;
        this.reserver= reserver;
        this.annuler = annuler;
        this.resaencours = resaencours ;
        this.temp = temp;
        this.canvas = canvas;
        this.texteResa = texteResa;
        this.effacer = effacer;
        this.infoBouton = infoBouton ;
        this.infoBouton2 = infoBouton2;
        this.placenom = placenom;
        this.placeprenom = placeprenom;
        this.dispo = dispo;
        this.nomstation = nomstation;
        this.localisation = localisation;
        this.statut = statut;
        this.totalvelo = totalvelo;

    }  

    reafficherNoms (){

        var nomEnregistre = localStorage.getItem("infoNom");
        this.placenom.value = nomEnregistre;
        var prenomEnregistre = localStorage.getItem("infoPrenom");
        this.placeprenom.value = prenomEnregistre;

    }

//Canvas affiché lorsque on clic sur RESERVER
afficherCanvas () {

    this.reserver.addEventListener('click', function () {


        var infovelorecu = document.getElementById("dispo").textContent;
        localStorage.setItem("infoNom",document.getElementById("namel").value); 
        localStorage.setItem("infoPrenom",document.getElementById("firstnamel").value);
        var nomEnregistre = localStorage.getItem("infoNom");
        var prenomEnregistre = localStorage.getItem("infoPrenom");
        var infoVelorecu =parseInt(infovelorecu);

        if (nomEnregistre !="" && prenomEnregistre!="" && infovelorecu >0){
            this.canvas.style.display = 'block';
            this.infoBouton.style.display = 'none';
            this.infoBouton2.style.display = 'none';
            self.location.hash= '#reservation';
            sessionStorage.clear();
        }
        else if (infoVelorecu === 0 || isNaN(infoVelorecu) ){
            this.infoBouton.style.display = 'none';
            this.infoBouton2.style.display = 'none';
            this.infoBouton2.style.display = 'block';
            sessionStorage.clear();

            
        }
        else if(nomEnregistre ==="" || prenomEnregistre ==="" ){
            this.infoBouton.style.display = 'none';
            this.infoBouton2.style.display = 'none';
            this.infoBouton.style.display = 'block';
            sessionStorage.clear();

        }

    }.bind(this) );
}



// bouton "valider" affiché après signature 

afficherValider () {
    this.canvas.addEventListener('click', function () {
        this.valider.style.display = 'block';

    }.bind(this));
}

afficherValiderdoigt () {
    this.canvas.addEventListener('touchstart', function () {
        this.valider.style.display = 'block';

    }.bind(this));
}



// au clic de VALIDER, on envoie dans le sessionStorage l'adresse de la station validée

validationReservation () {

    this.valider.addEventListener('click', function () {
        this.resaencours.style.display = 'block';
            this.declenchementTemps(); /////////////////////////////// déclenchement TIMER
            localStorage.setItem("infoNom",document.getElementById("namel").value); 
            localStorage.setItem("infoPrenom",document.getElementById("firstnamel").value);
            var nomEnregistre = localStorage.getItem("infoNom");
            var prenomEnregistre = localStorage.getItem("infoPrenom");
            sessionStorage.setItem("AdresseStation",document.getElementById("localisation").textContent); 
            var inforecu = sessionStorage.getItem("AdresseStation"); 
            sessionStorage.setItem("VeloDisponible",document.getElementById("dispo").textContent); 
            var infovelorecu = sessionStorage.getItem("VeloDisponible");
            sessionStorage.setItem("localisationV",document.getElementById("statut").textContent); 

            this.texteResa.textContent =  nomEnregistre  +" " +  prenomEnregistre   +  "  : un vélo a été réservé à cette adresse : " + inforecu; 
            this.dispo.textContent = infovelorecu-1;
            this.texteResa.style.fontWeight = 900;
            this.canvas.style.display = 'none';
            this.reserver.style.display = 'none';
            self.location.hash= '#resaencours';

        //setTimeout("location.reload(true);", 2000);
    }.bind(this));

}






    // TIMER 
    declenchementTemps () {
        this.TempResa = 1200000;
        var dateFinal = new Date().getTime() + this.TempResa; // calcul de la date finale en ms de la fin du décompte
        this.temps = setInterval(function () { //chaque seconde on prend la valeur en ms de la date actuelle
            var dateMaintenant = new Date().getTime();
            var tempsRestant = dateFinal - dateMaintenant; // on soustrait date finale et date maintenaant (en ms)
            sessionStorage.setItem('temps', tempsRestant); //mise en mémoire


            var minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60)); // on convertit en mn  le tempsRestant
            var seconds = Math.floor((tempsRestant % (1000 * 60)) / 1000);// on convertit en sec  le tempsRestant restant en seconde
            this.temp.textContent = 'Votre réservation prend fin dans ' + minutes +  ' minutes ' + seconds  + ' secondes';
             sessionStorage.setItem('minutesR', minutes); //mise en mémoire
             sessionStorage.setItem('secondesR', seconds); //mise en mémoire

            if (tempsRestant < 0) {// si temps restant est inférieur à 0 il est mis à 0 >>> le rebours s'arrête
                tempsRestant === 0;
            this.temp.textContent = 'Votre réservation a  expiré !';
            this.temp.style.textAlign ="center";
            sessionStorage.clear();
        }




         


    }.bind(this));
        return;
    }

    // affichage du message de la station réservée  
    recuperationDonnee () {

        var inforecu = sessionStorage.getItem("AdresseStation"); 
        this.texteResa.textContent = "un vélo a été réservé à cette adresse :" + this.inforecu;   

    }


    // annulation de la réservation : on reinitialise le site 
    annulerReservation  () {

        this.annuler.addEventListener('click', function () {
            var infovelorecu = sessionStorage.getItem("VeloDisponible");
            var infovelorecuA = Number(infovelorecu) + 0;
            this.dispo.textContent = infovelorecuA;
            clearInterval (this.temps);
            sessionStorage.clear();
            this.resaencours.style.display = 'none';
            this.canvas.style.display = 'none';
            this.reserver.style.display = 'block';
            self.location.hash= '#mapid';

        }.bind(this));
        return;
    }



    //rechargePage (){

      // window.addEventListener("load", function(){
       // var nomEnregistre = localStorage.getItem("infoNom");
       // var prenomEnregistre = localStorage.getItem("infoPrenom");
       // var inforecu = sessionStorage.getItem("AdresseStation");
       // var minustesRestantes = sessionStorage.getItem("minutesR");
       // var secondesRestantes = sessionStorage.getItem("secondesR");
       // var tempsR = sessionStorage.getItem("temps");
       // if ( this.minustesRestantes =18){
         //this.localisation.textContent = sessionStorage.getItem("AdresseStation"); 
        // setInterval (function () {
       // this.resaencours.style.display = 'block';
       // this.temp.textContent = 'Votre réservation prend fin dans ' + this.minustesRestantes +  ' minutes ' + this.secondesRestantes  + ' secondes';
       // this.texteResa.textContent =  nomEnregistre  +" " +  prenomEnregistre   +  "  : un vélo a été réservé à cette adresse : " + inforecu;
       // }.bind(this));
          //}
        
    //}.bind(this))

    //}




    // effacement de la signature
    effacerSignature  () {

        this.effacer.addEventListener('click', function () {
            sessionStorage.clear();
            this.resaencours.style.display = 'none';
            signature.effacer();
        }.bind(this));
    }

    functionInit (){
        //resa.rechargePage();
        resa.reafficherNoms();
        resa.afficherCanvas(); 
        resa.afficherValider();
        resa.afficherValiderdoigt();
        resa.validationReservation(); 
        resa.recuperationDonnee();
        resa.annulerReservation();
       
    }


}

let resa = new ReservationVelo (
    document.getElementById('valider'),
    document.getElementById('reserver'),
    document.getElementById('annuler'),
    document.getElementById('resaencours'),
    document.getElementById('timer'),
    document.getElementById('reservation'),
    document.getElementById('footer-text'),
    document.getElementById(' effacer'),
    document.getElementById('infoBouton'),
    document.getElementById('infoBouton2'),
    document.getElementById('namel'),
    document.getElementById('firstnamel'),
    document.getElementById('dispo'),
    document.getElementById('nomstation'),
    document.getElementById('localisation'),
    document.getElementById('statut'),
    document.getElementById('totalvelo')
    );


resa.functionInit();
signa.effacer();
