

let $bloccontrole=$("bloccontrole")
let $diaporama =$("#diaporama") //déclaration du bloc diaporama comme variable
let $img =$("#diaporama img") // déclaration des images du diaporama comme variable
let indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css("display", "block");// affichage de l'image courante



$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

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


$(document).keydown(function(e){
let appui= e.keycode || e.which

if (appui===37){

i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ) {
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

}
});

$(document).keydown(function(e){
let appui= e.keycode || e.which

if (appui===39){


    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

}

});

var settimeout;

function slideImg(){
     settimeout =setTimeout(function(){ //  fonction anonyme
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
    	}
    	else{ // sinon, on le remet à 0 (première image)
    	    i = 0;
    	}

    	$img.css('display', 'none');

    	$currentImg = $img.eq(i);
    	$currentImg.css('display', 'block');

	   slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 5000); // on définit l'intervalle à 7000 millisecondes (7s)

}
    

 slideImg(); //  lance la fonction une première fois


$('.pause').click(function(){
    clearTimeout(settimeout);
   
});

$('.play').click(function(){
    clearTimeout(settimeout);
    slideImg();
   
 });
   

 

