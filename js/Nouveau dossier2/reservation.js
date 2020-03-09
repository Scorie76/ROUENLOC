

var ReservationVelo = {

    valider: document.getElementById('valider'),
    reserver: document.getElementById('reserver'),
    annuler: document.getElementById('annuler'),
    resaencours : document.getElementById('resaencours'),
    temp: document.getElementById('timer'),
    canvas: document.getElementById('reservation'),
    texteResa: document.getElementById('footer-text'),
    effacer: document.getElementById('effacer'),
    infoBouton: document.getElementById('infoBouton'),
    infoBouton2: document.getElementById('infoBouton2'),
    nomMemoire: document.getElementById('namel'),
    prenomMemoire: document.getElementById('firstnamel'),
   

//mise en méméoire du contenu  des champs prénom et nom 
    afficherNom: function () {
        var nomEnregistre = localStorage.getItem("infoNom");
        var prenomEnregistre = localStorage.getItem("infoPrenom");
        ReservationVelo.nomMemoire.value = nomEnregistre;
        ReservationVelo.prenomMemoire.value = prenomEnregistre;
    },

//Canvas affiché lorsque on clic sur RESERVER
    afficherCanvas: function () {
      
        ReservationVelo.reserver.addEventListener('click', function () {
            
            
            var infovelorecu = document.getElementById("dispo").textContent;
            localStorage.setItem("infoNom",document.getElementById("namel").value); 
            localStorage.setItem("infoPrenom",document.getElementById("firstnamel").value);
            var nomEnregistre = localStorage.getItem("infoNom");
            var prenomEnregistre = localStorage.getItem("infoPrenom");
            infoVelorecu =parseInt(infovelorecu);
            
            if (nomEnregistre !="" && prenomEnregistre!="" && infovelorecu >0){
                ReservationVelo.canvas.style.display = 'block';
                ReservationVelo.infoBouton.style.display = 'none';
                ReservationVelo.infoBouton2.style.display = 'none';
                self.location.hash= '#reservation';
                sessionStorage.clear();
            }
            else if (infoVelorecu === 0 || isNaN(infoVelorecu) ){
                ReservationVelo.infoBouton.style.display = 'none';
                ReservationVelo.infoBouton2.style.display = 'none';
                ReservationVelo.infoBouton2.style.display = 'block';
                sessionStorage.clear();
               
            
            }
            else if(nomEnregistre ==="" || prenomEnregistre ==="" ){
                ReservationVelo.infoBouton.style.display = 'none';
                ReservationVelo.infoBouton2.style.display = 'none';
                ReservationVelo.infoBouton.style.display = 'block';
                sessionStorage.clear();
                 
            }

        });
    },



// bouton "valider" affiché après signature 

    afficherValider: function () {
        ReservationVelo.canvas.addEventListener('click', function () {
        ReservationVelo.valider.style.display = 'block';
            
        });
    },

    afficherValiderdoigt: function () {
        ReservationVelo.canvas.addEventListener('touchstart', function () {
        ReservationVelo.valider.style.display = 'block';
            
        });
    },



// au clic de VALIDER, on envoie dans le sessionStorage l'adresse de la station validée

    validationReservation : function () {

        ReservationVelo.valider.addEventListener('click', function () {
            ReservationVelo.resaencours.style.display = 'block';
            ReservationVelo.declenchementTemps(); // déclenchement TIMER
            localStorage.setItem("infoNom",document.getElementById("namel").value); 
            localStorage.setItem("infoPrenom",document.getElementById("firstnamel").value);
            var nomEnregistre = localStorage.getItem("infoNom");
            var prenomEnregistre = localStorage.getItem("infoPrenom");
            sessionStorage.setItem("AdresseStation",document.getElementById("localisation").textContent); 
            var inforecu = sessionStorage.getItem("AdresseStation"); 
            sessionStorage.setItem("VeloDisponible",document.getElementById("dispo").textContent); 
            var infovelorecu = sessionStorage.getItem("VeloDisponible"); 

            ReservationVelo.texteResa.textContent =  nomEnregistre  +" " +  prenomEnregistre   +  "  : un vélo a été réservé à cette adresse : " + inforecu; 
            ReservationVelo.texteResa.style.fontWeight = 900;
            ReservationVelo.canvas.style.display = 'none';
            ReservationVelo.reserver.style.display = 'none';
            self.location.hash= '#resaencours';

        //setTimeout("location.reload(true);", 2000);
        });

    },

    // TIMER 
   declenchementTemps: function () {
            
        ReservationVelo.TempResa = 1200000; //temps résa en ms
        var dateFinal = new Date().getTime() + ReservationVelo.TempResa; // calcul de la date finale en ms de la fin du décompte
        ReservationVelo.temps = setInterval(function () { //chaque seconde on prend la valeur en ms de la date actuelle
            var dateMaintenant = new Date().getTime();
            var tempsRestant = dateFinal - dateMaintenant; // on soustrait date finale et date maintenaant (en ms)
            sessionStorage.setItem('temps', tempsRestant); //mise en mémoire
           
            var minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60)); // on convertit en mn  le tempsRestant
            var seconds = Math.floor((tempsRestant % (1000 * 60)) / 1000);// on convertit en sec  le tempsRestant restant en seconde
            ReservationVelo.temp.textContent = 'Votre réservation prend fin dans ' + minutes +  ' minutes ' + seconds  + ' secondes';
                                    
            if (tempsRestant < 0) {// si temps restant est inférieur à 0 il est mis à 0 >>> le rebours s'arrête
                tempsRestant === 0;
                ReservationVelo.temp.textContent = 'Votre réservation a  expiré !';
                ReservationVelo.temp.style.textAlign ="center";
                sessionStorage.clear();
            } 
        });
        return;
    },

    // affichage du message de la stion réservée  
    recuperationDonnee : function () {

        var inforecu = sessionStorage.getItem("AdresseStation"); 
        ReservationVelo.texteResa.textContent = "un vélo a été réservé à cette adresse :" + inforecu;   
            
    },


    // annulation de la réservation : on reinitialise le site 
    annulerReservation : function () {

        ReservationVelo.annuler.addEventListener('click', function () {
            clearInterval (ReservationVelo.temps);
            sessionStorage.clear();
            ReservationVelo.resaencours.style.display = 'none';
            ReservationVelo.canvas.style.display = 'none';
            ReservationVelo.reserver.style.display = 'block';
            self.location.hash= '#mapid';
        });
    },

    // effacement de la signature
    effacerSignature : function () {

        ReservationVelo.effacer.addEventListener('click', function () {
            clearInterval (ReservationVelo.temps);
            sessionStorage.clear();
            ReservationVelo.resaencours.style.display = 'none';
            signature.effacer();
        });
    },

};
   

ReservationVelo.afficherNom();
ReservationVelo.afficherCanvas(); 
ReservationVelo.afficherValider();
ReservationVelo.afficherValiderdoigt();
ReservationVelo.validationReservation(); 
ReservationVelo.recuperationDonnee();
ReservationVelo.annulerReservation();
ReservationVelo.effacerSignature();