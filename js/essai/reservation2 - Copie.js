

var ReservationVelo = {
        valider: document.getElementById('valider'),
        reserver: document.getElementById('reserver'),
        annuler: document.getElementById('annuler'),
        resaencours : document.getElementById('resaencours'),
        temp: document.getElementById('timer'),
        canvas: document.getElementById('reservation'),
        texteResa: document.getElementById('footer-text'),
        effacer: document.getElementById('effacer'),


//condition d'affichage des champs prénom et nom

  

//Canvas affiché lorsque on clic sur réserver
        initCanvas: function () {
      
            ReservationVelo.reserver.addEventListener('click', function () {
            ReservationVelo.canvas.style.display = 'block';
            sessionStorage.clear();

            //ReservationVelo.texteResa.textContent = 'Pas de  réservation en cours ...'
            });
        },



// bouton "valider" affiché après signature 

      initValider: function () {
            ReservationVelo.canvas.addEventListener('click', function () {
            ReservationVelo.valider.style.display = 'block';
            
            });
        },



// au clic de valider on envoie dans le sessionStorage l'adresse de la station validée

validationReservation : function () {

      ReservationVelo.valider.addEventListener('click', function () {
        ReservationVelo.resaencours.style.display = 'block';
        ReservationVelo.declenchementTemps();
        localStorage.setItem("infoNom",document.getElementById("namel").value); 
        localStorage.setItem("infoPrenom",document.getElementById("firstnamel").value);
        var nomEnregistre = localStorage.getItem("infoNom");
        var prenomEnregistre = localStorage.getItem("infoPrenom");
        sessionStorage.setItem("AdresseStation",document.getElementById("localisation").textContent); 
        var inforecu = sessionStorage.getItem("AdresseStation"); 
        ReservationVelo.texteResa.textContent =  prenomEnregistre  +" " +  nomEnregistre   +  "  :un vélo a été réservé à cette adresse :" + inforecu;  
        ReservationVelo.canvas.style.display = 'none';
       
        //setTimeout("location.reload(true);", 2000);
});



},


   declenchementTemps: function () {
            
            ReservationVelo.initTemp = 60000;
            var dateFinal = new Date().getTime() + ReservationVelo.initTemp;
            ReservationVelo.temps = setInterval(function () {
                var dateMaintenant = new Date().getTime();
                var distance = dateFinal - dateMaintenant;
                sessionStorage.setItem('temps', distance);
           
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                ReservationVelo.temp.textContent = 'Votre réservation prend fin dans ' + minutes +  ' minutes ' + seconds  + ' secondes';
                                    
                if (distance < 0) {
                    distance === 0;
                    ReservationVelo.temp.textContent = 'Votre réservation a  expiré !';

                } 
            });
            return;
        },

        
recuperationDonnee : function () {

     
         
         var inforecu = sessionStorage.getItem("AdresseStation"); 
       ReservationVelo.texteResa.textContent = "un vélo a été réservé à cette adresse :" + inforecu;   
        
        },



annulerReservation : function () {

        ReservationVelo.annuler.addEventListener('click', function () {
        clearInterval (ReservationVelo.temps);
        sessionStorage.clear();
        
        
        ReservationVelo.resaencours.style.display = 'none';
        ReservationVelo.canvas.style.display = 'none';
        });
},


effacerSignature : function () {

        ReservationVelo.effacer.addEventListener('click', function () {
        clearInterval (ReservationVelo.temps);
        sessionStorage.clear();
          
        ReservationVelo.resaencours.style.display = 'none';
        ReservationVelo.canvas.style.display = 'none';
        });
},




        };
   


ReservationVelo.initCanvas(); 

ReservationVelo.initValider();

ReservationVelo.validationReservation(); 

ReservationVelo.recuperationDonnee();

ReservationVelo.annulerReservation();

ReservationVelo.effacerSignature();