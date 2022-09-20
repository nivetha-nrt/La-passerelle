// Les variables 

let note_toto = 12;

// Code DRY : Don't Repeat Yourself



// Les tableaux

let tabClasse = ["Marco", "Thomas", "Daniel", "Laurie", "Pedro", "Nivetha", "Oskar", "Adel", "Nohwa", "Florian", "Gabriel", "Hardy", "Léo", "Julien", "Yves"];

// Les opérateurs : +, -, *, /, %

// Les tests conditionnels 
// Les opérateurs de comparaison : ==, <, >, !=

if (note_toto > 10 ) {
    console.log('Tu as la moyenne');
} 
else {
    console.log("tu n'as pas la moyenne");
}

// Boucles : while, do... while, for, for in, foreach, for of,... 

let prompt = require('prompt-sync')();

let entreeUtilisateur = prompt('Entrez un nombre entier: ');
while (isNaN(entreeUtilisateur)) {
    console.log ("Ce n'est pas un nombre entier ! ");
    entreeUtilisateur = prompt('Entrez un nombre entier : ');
}
console.log ("Votre nombre est : " +entreeUtilisateur);

for (let compteur = 0; compteur <= 100; compteur +=10 ) {
    console.log(compteur);
}