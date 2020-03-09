

var objTimer = {
    duree: 1200, //déclaration durée en secondes

    initTimer: function () {
        this.timer;
        s = this.duree; //Secondes --> On initialise les secondes à 1200s 
        mn = 0; //Minutes

        if (s <= 0) {
            timer.textContent ="Votre réservation a expiré";
            sessionStorage.clear(); //Supprime les données du sessionStorage à la fin du décompte
        } 
        else {
            if (s > 59) {
                mn = Math.floor(s / 60);//renvoie le plus grand entier qui est inférieur ou égal à un nombre 
                s = s - mn * 60
            }
            if (s < 10) {
                s = "0" + s
            }
            if (mn < 10) {
                mn = "0" + mn
            }
            timer.innerHTML = "Votre réservation prend fin dans " + mn + " mn " + s + " s";
        }
        this.duree = this.duree - 1;
        compteARebour = window.setTimeout("objTimer.initTimer();", 999);
        return timer;
    },

    // Méthode  reset du timer
    resetTimer: function () {
        clearTimeout(compteARebour);
        this.duree = 1200; //on repart de 20 mn
    },
    // Calcul de la différence entre l'heure de reservation et l'heure actuelle
    diffTime: function () {
        var timeReserv = sessionStorage.getItem('heure-reservation');
        var timeActuelle = new Date().getTime();
        var diff = Math.round(1200 - ((timeActuelle - timeReserv) / 1000));
        return diff;
    }

}

var compteARebour;
var timer = document.getElementById('timer');