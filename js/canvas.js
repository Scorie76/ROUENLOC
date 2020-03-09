
class CanvasSignature{

  constructor(canvas){
    this.canvas = canvas;
    this.dessin =false;
    this.ctx = canvas.getContext("2d");
  }

  // INITIALISE CANVAS
  canvasRefresh () {
     this.ctx.strokeStyle = "#0d47a1"; // couleur du tracé
     this.ctx.lineWidth = 1; // épaisseur du tracé
     this.mouvementSouris(); //activation méthode mouvement souris
     this.mouvementDoigt(); // activation méthode mouvement doigt
     this.dessiner(); // activation de la méthode dessiner
  }

  // METHODE: EVENEMENT SOURIS
  // -------------------------
  mouvementSouris () {
  // EVENT: Bouton de la souris enfoncé
    this.canvas.addEventListener("mousedown", function (e) { //sur la div canvas et le bouton de la souris est enfoncé
       this.dessin = true;
       this.ctx.beginPath(); //permet de commencer un nouveau chemin en vidant la liste des sous-chemins
       this.ctx.moveTo(e.offsetX, e.offsetY); //on enregistre la position de la souris lorsque on appuie sur le bouton de la souris : le pointeur de la souris sert de stylo et on enregistre les positions du pointeur
    }.bind(this));

    // EVENT: Déplacement de la souris
    this.canvas.addEventListener("mousemove", function (e) {
      if (this.dessin === true) {// Si le bouton est enfoncé, dessine
        this.dessiner(e.offsetX, e.offsetY); // au déplacement de la souris on active la méthode dessiner 
      }
    }.bind(this));

    // EVENT: Bouton de la souris relâché ==< 
    this.canvas.addEventListener("mouseup", function (e) {
       this.dessin = false;
    }.bind(this));
  }

// METHODE: GERE LES EVENEMENTS TACTILE SUR MOBILE
  // -----------------------------------------------
  mouvementDoigt () {
    // EVENT: touché
    this.canvas.addEventListener("touchstart", function (e) {
      var touchX = e.touches[0].pageX - e.touches[0].target.offsetLeft; //prend la position en left du doigt
      var touchY = e.touches[0].pageY - e.touches[0].target.offsetTop; // prend la position en top du doigt >>>> les 2 coordonnées du doigt sur l'écran
      this.dessin = true;
      this.ctx.beginPath();//permet de commencer un nouveau chemin en vidant la liste des sous-chemins
      this.ctx.moveTo(touchX, touchY);//on enregistre la position du doigt
      // Empêche le scrolling de l'écran
      e.preventDefault();
    }.bind(this));


    // EVENT: Déplacement du touché
    this.canvas.addEventListener("touchmove", function (e) {
      var touchX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      var touchY = e.touches[0].pageY - e.touches[0].target.offsetTop;
      if ( this.dessin === true) {
        this.dessiner(touchX, touchY); // au toucher on active la fonction dessiner 
      }
      // Empêche le scrolling de l'écran
      e.preventDefault();
    }.bind(this));

    // EVENT: fin du touché
    this.canvas.addEventListener("touchend", function (e) {
       this.dessin = false;
    }.bind(this));
  }


  // METHODE: DESSINER
  // -----------------
  dessiner (x,y) {
     this.ctx.lineTo(x,y); //connecte le dernier point du sous-chemin sans tracer le chemin
     this.ctx.stroke();//dessine le chemin actuel ou donné avec le style de trait défini plus haut 
  }

  effacer (){
     this.ctx.clearRect(0,0,200,200);
  }

  functionInit (){
  signa.canvasRefresh();
  signa.mouvementSouris();
  signa.mouvementDoigt();
  signa.dessiner();
  signa.effacer();
  }

};

 

let signa = new CanvasSignature (
  document.getElementById("canvas"),
  );

//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



//Evénement : au clic du bouton effacer, le canvas s'efface 
          
      $("#effacer").on("click", function () {
            signa.effacer();
            $("#resaencours").fadeOut("slow");
          });


      $("#annuler").on("click", function () {
            signa.effacer();
            $("#resaencours").fadeOut("slow");
          });


signa.functionInit();







