// Prompt sync

let prompt = require('prompt-sync')();

// Afficher le texte introductif pour l'utilisateur 

console.log('Vous vous promenez sur un sentier en forêt. Vous arrivez à un embranchement. Que faites vous ? ') 

// Proposer de choisir entre 2 ou plus d'options

let choixUser = prompt('1 - Je vais à gauche \n 2 - Je vais à droite');

// Dévoiler le résultat de son choix 

if (choixUser == 1) {
    console.log('Vous arrivez devant un manoir abandonné. ');
} 

else if (choixUser == 2) {
    console.log ('Vous arrivez devant un manoir nauséabond. ');
}

else {
    console.log ('Commande inconnue. ');
}