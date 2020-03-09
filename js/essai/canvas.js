


var Signature = {
  dessin: false,
  canvas: document.getElementById("canvas"),
  ctx : canvas.getContext("2d"),

  // INITIALISE CANVAS
  canvasRefresh: function () {
    
    Signature.ctx.strokeStyle = "#0d47a1"; // couleur du tracé
    Signature.ctx.lineWidth = 2; // épaisseur du tracé

    Signature.mouvementSouris();
    Signature.mouvementDoigt();
    Signature.dessiner();
  },



  // METHODE: EVENEMENT SOURIS
  // -------------------------
  mouvementSouris: function () {

    // EVENT: Bouton de la souris enfoncé
    $("#canvas").on("mousedown", function (e) {
      Signature.dessin = true;
      Signature.ctx.beginPath(); //permet de commencer un nouveau chemin en vidant les autres
      Signature.ctx.moveTo(e.offsetX, e.offsetY); //on enregistre la position de la souris lorsque on appuie sur le bouton de la souris

    });

    // EVENT: Déplacement de la souris
    $("#canvas").on("mousemove", function (e) {
      // Si le bouton est enfoncé, dessine
      if (Signature.dessin === true) {
        Signature.dessiner(e.offsetX, e.offsetY);
       
      }
    });

    // EVENT: Bouton de la souris relâché
    $("#canvas").on("mouseup", function (e) {
      Signature.dessin = false;
    });
  },

// METHODE: GERE LES EVENEMENTS TACTILE SUR MOBILE
  // -----------------------------------------------
  mouvementDoigt: function () {
    // EVENT: touché
    $("#canvas").on("touchstart", function (e) {
      var touchX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      var touchY = e.touches[0].pageY - e.touches[0].target.offsetTop;

      Signature.dessin = true;
      Signature.ctx.beginPath();
      Signature.ctx.moveTo(touchX, touchY);
      // Empêche le scrolling de l'écran
      e.preventDefault();
    });

    // EVENT: Déplacement du touché
    $("#canvas").on("touchmove", function (e) {
      var touchX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      var touchY = e.touches[0].pageY - e.touches[0].target.offsetTop;

      if (Signature.dessin === true) {
        Signature.dessiner(touchX, touchY);
        
      }
      // Empêche le scrolling de l'écran
      e.preventDefault();
    });

    // EVENT: fin du touché
    $("#canvas").on("touchend", function (e) {
      Signature.dessin = false;
    });
  },

 



  // METHODE: DESSINER
  // -----------------
  dessiner: function (x,y) {
    Signature.ctx.lineTo(x,y); //connecte le dernier point du sous-chemin sans tracer le chemin
    Signature.ctx.stroke();//dessine le chemin actuel ou donné avec le style de trait actuel 
  },

  effacer: function (){
    Signature.ctx.clearRect(0,0,860,200);

  },



};

Signature.canvasRefresh();




//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



//Evénement : au clic du bouton effacer, le canvas s'efface 
          
      $("#effacer").on("click", function () {
            Signature.effacer();
            $("#resaencours").fadeOut("slow");
          });


      $("#annuler").on("click", function () {
            Signature.effacer();
            $("#resaencours").fadeOut("slow");
          });










