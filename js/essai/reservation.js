




//var Reservation = {


// METHODE: VALIDATION DE LA RESERVATION
  // -------------------------------------
 // validerReservation: function () {
  
    //Cache le bouton et le panneau de réservation.
   // $("#reserver").fadeOut("slow");
   // $(".footer-text").text("Votre vélo à la station " + station.name+ " est réservé pour :");
     
  
            
        //},



//Evénement : au clic du bouton reserver, lancement de la methode "validation de la réservation"
        


//}

// affichage du champ prénom et nom si vélo disponible supérieur à 0 


//Auclic du bouton réserver : mise en mémoire dans le storage des différentes infos pour valider la réservation
document.getElementById("reserver").onclick= function () {
         
         sessionStorage.setItem("veloDispo",document.getElementById("dispo").textContent);// Vélo disponible  en mémoire
       console.log(sessionStorage.getItem("veloDispo"));
          

          sessionStorage.setItem("stationName",document.getElementById("nomstation").textContent);// nom station en mémoire
       console.log(sessionStorage.getItem("stationName"));


          sessionStorage.setItem("AdresseStation",document.getElementById("localisation").textContent);// adresse station en mémoire
       console.log(sessionStorage.getItem("AdresseStation"));
       

        sessionStorage.setItem("nomLocataire",document.getElementById("namel").value);// nom locataire en mémoire
       console.log(sessionStorage.getItem("nomLocataire"));

       sessionStorage.setItem("prenomLocataire",document.getElementById("firstnamel").value);// nom locataire en mémoire
       console.log(sessionStorage.getItem("prenomLocataire"));


       sessionStorage.setItem("statut",document.getElementById("statut").textContent);// nom locataire en mémoire
       console.log(sessionStorage.getItem("statut"));

sessionStorage.setItem("temps",document.getElementById("timer").textContent);// nom locataire en mémoire
       console.log(sessionStorage.getItem("temps"));

        };


//Evénement : au clic du bouton valider, le bloc réservation s'affiche 
        $("#valider").on("click", function () {
         
          
          $("#resaencours").fadeIn("slow");
          ;
        });





//Evénement : au clic du bouton reserver, le canvas s'affiche
        $("#reserver").on("click", function () {
         
          
          $("#reservation").fadeIn("slow");
          
        });

$("#reserver").on("click", function () {
         
          
          
         
        });



// affichage du champ prénom et nom si vélo disponible supérieur à 0




$(".annuler").on("click", function () {
         
          
          $("#reserver").fadeOut("slow");
          
        });

//if (document.getElementById("statut").textContent) === "open" {

 // $("#reserver").fadein ("slow")

//}
//Compte à rebours


$(document).ready(function() { 
 
  var secondes = 0; 
  var minutes = 20; 
  function calculate() { 
 
  setTimeout(calculate, 1000); 
 
  $('#timer').html(' Votre réservation expire dans ' + minutes + ' minutes ' + secondes + ' secondes '); 
 
       secondes--; 
 
       if (secondes < 0) { 
 
        secondes = 59; 
 
        minutes--; 
 
        if (minutes < 0) { 
 
         minutes = 0; 
 
         secondes = 0; 
 
        } 
 
       } 
 
      } 



 
      calculate(); 
 
     }); 



var data_recu = sessionStorage.getItem("stationName");
document.getElementById("footer-text").textContent = 'Vous  avez reservé 1 vélo à cette station:  '  + data_recu;

  SignIn.effacer();