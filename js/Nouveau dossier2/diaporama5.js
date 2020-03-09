class Diaporama{

    constructor(bloccontrole, diaporama, img) {
        this.bloccontrole = bloccontrole;
        this.diaporama = diaporama;
        this.img = img;
        this.indexImg = img.length - 1;
        this.i = 0;
        this.currentImg = img.eq(this.i);
        this.settimeout;
        this.slideImg();
    }

    affichage(){
        this.img.css('display', 'none'); // on cache les images
        this.currentImg.css("display", "block");// affichage de l'image courante  
    }

    next(){
        console.log('next');
        this.i++; // on incrémente le compteur

        if(this.i <= this.indexImg){
            this.img.css('display', 'none'); // on cache les images
            this.currentImg = this.img.eq(this.i); // on définit la nouvelle image
            this.currentImg.css('display', 'block'); // puis on l'affiche
        }
        else{
            this.i = this.indexImg;
        }
    }

    prev(){

        console.log('prev');
        this.i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

        if(this.i >= 0){
            this.img.css('display', 'none');
            this.currentImg = this.img.eq(this.i);
            this.currentImg.css('display', 'block');
        }
        else{
            this.i = 0;
        }
    }

    keydown(e){
        let appui= e.keycode || e.which

        if (appui===37){

        this.i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

            if( this.i >= 0 ) {
                this.img.css('display', 'none');
                this.currentImg = this.img.eq(this.i);
                this.currentImg.css('display', 'block');
            }
            else{
                this.i = 0;
            }

        }
        else if (appui===39){
            this.i++; // on incrémente le compteur

            if( this.i <= this.indexImg ){
                this.img.css('display', 'none'); // on cache les images
                this.currentImg = this.img.eq(this.i); // on définit la nouvelle image
                this.currentImg.css('display', 'block'); // puis on l'affiche
            }
            else{
                this.i = this.indexImg;
            }

        }
    }

    slideImg(){
        var that = this;
        this.settimeout = setTimeout(function(){ //  fonction anonyme
                            
            if(that.i < that.indexImg){ // si le compteur est inférieur au dernier index
                that.i++; // on l'incrémente
            }
            else{ // sinon, on le remet à 0 (première image)
                that.i = 0;
            }

            that.img.css('display', 'none');

            that.currentImg = that.img.eq(that.i);
            that.currentImg.css('display', 'block');

           that.slideImg(); // on oublie pas de relancer la fonction à la fin

        }, 5000); // on définit l'intervalle à 5000 millisecondes (7s)
    }

    play(){
        clearTimeout(this.settimeout);
        this.slideImg();
    }

    pause(){
        clearTimeout(this.settimeout);
    }
}

let diapo = new Diaporama($("bloccontrole"), $("#diaporama"), $("#diaporama img"));


$('.next').click(function(){diapo.next()});
$('.prev').click(function(){diapo.prev()});
$(document).keydown(function(e){diapo.keydown(e)});
$('.pause').click(function(){diapo.pause()});
$('.play').click(function(){diapo.play()});
diapo.affichage();
 

