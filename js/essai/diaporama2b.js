

var DiaporamaRouenloc = {


diaporama : document.getElementById('diaporama'), //déclaration du bloc diaporama comme variable
img : document.getElementsByClassName('images'),
  
$bloccontrole : $("bloccontrole"), 
$boutonNext : $(".next"),
$boutonPrec : $(".prev"),

img : $('#diaporama img'),
i : 0,


affichagePremiere: function() {

// on initialise un compteur
    
  i = 0; 
  indexImg = DiaporamaRouenloc.img.length - 1;
currentImg = DiaporamaRouenloc.img.eq(i); 

DiaporamaRouenloc.img.css('display', 'none'); // on cache les images
currentImg.css("display", "block");// affichage de l'image courante


},




imageSuivante : function () {


$('.next').click(function(){
     i = 0; 
  indexImg = DiaporamaRouenloc.img.length - 1;
currentImg = DiaporamaRouenloc.img.eq(i); 
    i++; // on incrémente le compteur
    console.log("coucou");
    if( i <= indexImg ){
        DiaporamaRouenloc.img.css('display', 'none'); // on cache les images
        currentImg = DiaporamaRouenloc.img.eq(i); // on définit la nouvelle image
        currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }     
       
});



},

imagePrecedente : function () {


$('.prev').click(function(){ 
    $img = $("#diaporama img");
    i = 0 // on initialise un compteur
    $currentImg = $img.eq(i),
    indexImg = $img.length - 1;

 i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

    });

},

 slideImg : function(){


    settimeout =setTimeout(function(){ //  fonction anonyme
          i = 0; 
  indexImg = DiaporamaRouenloc.img.length - 1;
currentImg = DiaporamaRouenloc.img.eq(i); 
         
                        
        if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
    }
    else{ // sinon, on le remet à 0 (première image)
        i = 0;
    }

    DiaporamaRouenloc.img.css('display', 'none');
    currentImg = DiaporamaRouenloc.img.eq(i);
    currentImg.css('display', 'block');

    DiaporamaRouenloc.slideImg(); //  lance la fonction une première fois

    },1000); // on définit l'intervalle à 5000 millisecondes 


    $('.pause').click(function(){
    clearTimeout(settimeout);
   
    });

    $('.play').click(function(){

    clearTimeout(settimeout);
   
   
    });
},






};
DiaporamaRouenloc.slideImg(); //  lance la fonction une première fois

 DiaporamaRouenloc.affichagePremiere(); //  lance la fonction une première fois

DiaporamaRouenloc.imagePrecedente(); //  lance la fonction une première fois

DiaporamaRouenloc.imageSuivante(); //  lance la fonction une première fois

