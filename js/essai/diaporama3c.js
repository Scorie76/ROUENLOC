




// Déclaration des variables du diaporama

var img =$("#diaporama img");
var  indexImg = img.length - 1;
var i = 0
var currentImg = img.eq(i);

//affichage de la première image

img.css('display', 'none'); // on cache les images
currentImg.css("display", "block");// affichage de l'image courante





//Objet Diaporama de RouenLoc//
var DiaporamaR = {

diaporama : $("#diaporama"), //déclaration du bloc diaporama comme variable
bloccontrole : $("bloccontrole"), 
boutonNext : $(".next"),
$boutonPrec : $(".prev"),

imageSuivante : function () {


$('.next').click(function(){
   
    i++; // on incrémente le compteur
    
    if( i <= indexImg ){
        img.css('display', 'none'); // on cache les images
        currentImg = img.eq(i); // on définit la nouvelle image
        currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }     
       
});



},


imageSuivanteT : function(){

$(document).keydown(function(e){
let appui= e.keycode || e.which

if (appui===37){

i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ) {
        img.css('display', 'none');
        currentImg = img.eq(i);
        currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

}
});

},

imagePrecedente : function () {


$('.prev').click(function(){ 
    

 i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        img.css('display', 'none');
        currentImg = img.eq(i);
        currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

    });

},


imagePrecedenteT : function () {

$(document).keydown(function(e){
let appui= e.keycode || e.which

if (appui===39){


    i++; // on incrémente le compteur

    if( i <= indexImg ){
        img.css('display', 'none'); // on cache les images
        currentImg = img.eq(i); // on définit la nouvelle image
        currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

}

});


},


 slideImg : function(){


    var settimeout =setTimeout(function(){ //  fonction anonyme              
        if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
    }
    else{ // sinon, on le remet à 0 (première image)
        i = 0;
    }

    img.css('display', 'none');
    currentImg = img.eq(i);
    currentImg.css('display', 'block');

    DiaporamaR.slideImg(); //  lance la fonction une première fois

    }, 5000); // on définit l'intervalle à 5000 millisecondes 



    $('.pause').click(function(){
    clearTimeout(settimeout);
   
    });

    $('.play').click(function(){

    clearTimeout(settimeout);
   DiaporamaR.slideImg();
   
    });
},





};

 //  lance la fonction une première fois
DiaporamaR.slideImg(); //  lance la fonction une première fois
DiaporamaR.imageSuivanteT(); //  lance la fonction une première fois
DiaporamaR.imagePrecedenteT(); //  lance la fonction une première fois
DiaporamaR.imagePrecedente(); //  lance la fonction une première fois
DiaporamaR.imageSuivante(); //  lance la fonction une première fois

