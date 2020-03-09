


var Signature = {
  dessin: false,
  canvas: document.getElementById("canvas"), // déclaration de la balise canvas
  ctx : canvas.getContext("2d"), // création d'un objet représentant un contexte de représentation bi-dimensionnel.

  // INITIALISE CANVAS
  canvasRefresh: function () {
    
    Signature.ctx.strokeStyle = "#0d47a1"; // couleur du tracé
    Signature.ctx.lineWidth = 1; // épaisseur du tracé

    Signature.mouvementSouris(); //activation méthode mouvement souris
    Signature.mouvementDoigt(); // activation méthode mouvement doigt
    Signature.dessiner(); // activation de la méthode dessiner
  },



  // METHODE: EVENEMENT SOURIS
  // -------------------------
  mouvementSouris: function () {

    // EVENT: Bouton de la souris enfoncé
    $("#canvas").on("mousedown", function (e) { //sur la div canvas et le bouton de la souris est enfoncé
      Signature.dessin = true;
      Signature.ctx.beginPath(); //permet de commencer un nouveau chemin en vidant la liste des sous-chemins
      Signature.ctx.moveTo(e.offsetX, e.offsetY); //on enregistre la position de la souris lorsque on appuie sur le bouton de la souris : le pointeur de la souris sert de stylo et on enregistre les positions du pointeur

    });

    // EVENT: Déplacement de la souris
    $("#canvas").on("mousemove", function (e) {
      // Si le bouton est enfoncé, dessine
      if (Signature.dessin === true) {
        Signature.dessiner(e.offsetX, e.offsetY); // au déplacement de la souris on active la méthode dessiner 
       
      }
    });

    // EVENT: Bouton de la souris relâché ==< 
    $("#canvas").on("mouseup", function (e) {
      Signature.dessin = false;
    });
  },

// METHODE: GERE LES EVENEMENTS TACTILE SUR MOBILE
  // -----------------------------------------------
  mouvementDoigt: function () {
    // EVENT: touché
    $("#canvas").on("touchstart", function (e) {
      var touchX = e.touches[0].pageX - e.touches[0].target.offsetLeft; //prend la position en left du doigt
      var touchY = e.touches[0].pageY - e.touches[0].target.offsetTop; // prend la position en top du doigt >>>> les 2 coordonnées du doigt sur l'écran

      Signature.dessin = true;
      Signature.ctx.beginPath();//permet de commencer un nouveau chemin en vidant la liste des sous-chemins
      Signature.ctx.moveTo(touchX, touchY);//on enregistre la position du doigt
      // Empêche le scrolling de l'écran
      e.preventDefault();
    });

    // EVENT: Déplacement du touché
    $("#canvas").on("touchmove", function (e) {
      var touchX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      var touchY = e.touches[0].pageY - e.touches[0].target.offsetTop;

      if (Signature.dessin === true) {
        Signature.dessiner(touchX, touchY); // au toucher on active la fonction dessiner
        
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
    Signature.ctx.stroke();//dessine le chemin actuel ou donné avec le style de trait défini plus haut 
  },

  effacer: function (){
    Signature.ctx.clearRect(0,0,200,200);

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










