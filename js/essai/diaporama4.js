

var DiapoRouenLoc = {
        img: $('#diaporama img'),
        indexImg: null,
        $currentImg: null,
        i: null,
        
        initSlide: function () {
            DiapoRouenLoc.i = 0; // on initialise un compteur
            DiapoRouenLoc.currentImg = DiapoRouenLoc.img.eq(DiapoRouenLoc.i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
            DiapoRouenLoc.indexImg = DiapoRouenLoc.img.length - 1; // on définit l'index du dernier élément
            DiapoRouenLoc.img.css('display', 'none'); // on cache les images
            DiapoRouenLoc.currentImg.css('display', 'block'); // on affiche seulement l'image courante

        },
        
        initImgDroite: function () {
            DiapoRouenLoc.img.css('display', 'none'); // on cache les images
            DiapoRouenLoc.currentImg = DiapoRouenLoc.img.eq(DiapoRouenLoc.i+1); // on définit la nouvelle image
            DiapoRouenLoc.currentImg.css('display', 'block'); // puis on l'affiche
            DiapoRouenLoc.i++;
        },
    
        initImgGauche: function () {
            DiapoRouenLoc.img.css('display', 'none'); // on cache les images
            DiapoRouenLoc.currentImg = DiapoRouenLoc.img.eq(DiapoRouenLoc.i-1); // on définit la nouvelle image
            DiapoRouenLoc.currentImg.css('display', 'block'); // puis on l'affiche
            DiapoRouenLoc.i--;
        },
     
        //Initialize la fonction touche de la fleche droite du clavier    
        initKeyFlecheDroite: function () {
            $(document).keydown(function(e){ 
     
                if ((e.which === 39) && (DiapoRouenLoc.i < DiapoRouenLoc.indexImg)) {
                        DiapoRouenLoc.initImgDroite();
                }
            });
        },
    
        //Initialize la fonction touche de la  fleche gauche du clavier    
        initKeyFlecheGauche: function () {  
            $(document).keydown(function(e){ 
       
                if ((e.which === 37) && (DiapoRouenLoc.i > 0)) {
                        DiapoRouenLoc.initImgGauche();
                }
            });
        },   
    
        //Initialize le fonction de la fleche gauche du diaporama    
        initClickFlecheGauche: function () {
            $('.prev').click(function(){ 
                clearInterval(SetInter);
                if (DiapoRouenLoc.i > 0){
                        DiapoRouenLoc.initImgGauche();
                }
            });
        },
    
        //Initialize la fonction de la touche droite du diaporama    
        initClickFlecheDroite: function () {
            $('.next').click(function(){ 
                clearInterval(SetInter);
                if (DiapoRouenLoc.i < DiapoRouenLoc.indexImg){
                        DiapoRouenLoc.initImgDroite();
                }
            });
        },
     
        //Initialize le fonction automatique du diaporama        
        initAutoSlide: function () {

                playing = true;
               SetInter =setInterval (function () { // on utilise une fonction anonyme
                        
                    if(DiapoRouenLoc.i < DiapoRouenLoc.indexImg) { // si le compteur est inférieur au dernier index
                        DiapoRouenLoc.i++; // on l'incrémente
                    }
                    else{ // sinon, on le remet à 0 (première image)
                        DiapoRouenLoc.i = 0;
                    }

                    DiapoRouenLoc.img.css('display', 'none');
                    DiapoRouenLoc.currentImg = DiapoRouenLoc.img.eq(DiapoRouenLoc.i);
                    DiapoRouenLoc.currentImg.css('display', 'block');

                }, 2000); // on définit l'intervalle


            $('.pause').click(function(){
             playing = false;
            clearInterval(SetInter);
            });

            $('.play').click(function(){

                playing = true;
             clearInterval(SetInter);
             DiapoRouenLoc.initSlide();
        
   
            });

            

        },


       
      
        initRunSlider: function () {

            DiapoRouenLoc.initSlide();
            DiapoRouenLoc.initKeyFlecheDroite();
            DiapoRouenLoc.initKeyFlecheGauche();
            DiapoRouenLoc.initClickFlecheGauche();
            DiapoRouenLoc.initClickFlecheDroite();
            DiapoRouenLoc.initAutoSlide();
           
        
        },




};


DiapoRouenLoc.initRunSlider();




   




 








