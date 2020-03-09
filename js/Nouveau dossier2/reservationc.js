

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
            this.annuler.style.display = 'block';
            var time = new Date();
            sessionStorage.setItem('heure-reservation', time.getTime()); //Stockage de l'heure du click dans le sessionStorage
            var heureReservation = sessionStorage.getItem('heure-reservation');
            objTimer.resetTimer(); //On reset le timer()
            objTimer.initTimer(); // Appel de la fonction Timer()
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
        }.bind(this));

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
            var infovelorecuA = Number(infovelorecu);
            clearInterval (this.temps);
            sessionStorage.clear();
            this.resaencours.style.display = 'none';
            this.canvas.style.display = 'none';
            this.reserver.style.display = 'block';
            this.dispo.textContent = "";
            this.totalvelo.textContent = "";
            this.statut.textContent = "";
            this.localisation.textContent = "";
            this.nomstation.textContent = "";
            self.location.hash= '#mapid';
            }.bind(this));
            return;
    }

        // au recharge de la page : comportement
    rechargePage (){
            window.addEventListener("load", function(){
                self.location.hash= resaencours;
                this.resaencours.style.display = 'none';
                var inforecu = sessionStorage.getItem("AdresseStation");
                var tempsRestant = sessionStorage.getItem("heure-reservation");
                if (sessionStorage.length != 0) {
                    console.log("coucou");
                    this.resaencours.style.display = 'block';
                    this.effacer.display ='block';
                    var nomEnregistre = localStorage.getItem("infoNom");
                    var prenomEnregistre = localStorage.getItem("infoPrenom");
                    var inforecu = sessionStorage.getItem("AdresseStation");

                    this.texteResa.textContent =  nomEnregistre  +" " +  prenomEnregistre   +  "  : un vélo a été réservé à cette adresse : " + inforecu;
                    this.texteResa.style.fontWeight = 900;
        objTimer.resetTimer(); // On réinitialise le timer
        objTimer.duree = objTimer.diffTime(); // On affecte la durée restante à la propriété durée
        objTimer.initTimer(); //On lance le timer

                }
                else{
                    this.resaencours.style.display = 'block';
                    this.temp.style.display = 'block';
                    this.temp.textContent =""
                    clearInterval (this.temps);
                    this.texteResa.textContent = "Aucune réservation en cours";
                    this.texteResa.style.fontWeight = 900;
                    this.temp.display ='none';
                    this.effacer.display ='none';
                    this.annuler.style.display = 'none';
                    this.dispo.textContent = "";
                }
            }.bind(this));
    }


        // effacement de la signature
    effacerSignature  () {
        this.effacer.addEventListener('click', function () {
            sessionStorage.clear();
            this.resaencours.style.display = 'none';
                
        }.bind(this));
    }

    functionInit (){

        resa.rechargePage();
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
    document.getElementById('effacer'),
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




