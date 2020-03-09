class Compteur{
	constructor(time){
		this.time = time;
		this.duree= 120;
		this.s = this.duree;//Secondes --> On initialise les secondes à 1200s ->20mn
		this.mn = 0; //Minutes
		this.initTimer();
	}




     //Initialisation de la durée en secondes
    initTimer () {
        
       
       

        if (this.s <= 0) {
            
       
            //compteur.innerHTML = "Votre réservation a expirée<br />"
            sessionStorage.clear(); //Supprime les données du sessionStorage à la fin du décompte
        } else {
            if (this.s > 59) {
                this.mn = Math.floor(this.s / 60);
                this.s = this.s - this.mn * 60
            }
            if (this.s < 10) {
                this.s = "0" + this.s
            }
            if (this.mn < 10) {
                this.mn = "0" + this.mn
            }
            this.time.innerHTML = "Votre réservation prend fin dans " + this.mn + ":" + this.s;
        }
        this.duree = this.duree - 1;
        this.compteARebour = window.setTimeout("objTimer.initTimer();", 999);
       
    }

    // Fonction pour le reset du timer
    resetTimer () {
        clearTimeout(this.compteARebour);
        this.duree = 120; //Au reset, on réinitialise le timer à 1200s
    }
    // Calcul de la différence entre l'heure de reservation et l'heure actuelle
    diffTime () {
        var timeReserv = sessionStorage.getItem('heure-reservation');
        var timeActuelle = new Date().getTime();
        var diff = Math.round(120 - ((timeActuelle - timeReserv) / 1000));
        return diff;
    }

}

let objTimer = new Compteur(
	document.getElementById('timer'),
	);



