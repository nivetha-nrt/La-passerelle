 "use strict";

let prenom  = "Marco";
let prenom2 = "Thomas";
let prenom3 = "Daniel";

let prenomsClasse = new Array();

prenomsClasse [0] = prenom;
prenomsClasse [1] = prenom2;
prenomsClasse [2] = prenom3;

console.table(prenomsClasse);

let tableau = [0, 2, 'Albert', 'peut-être', false];

console.table(tableau);

// La longueur

console.log(tableau.length);

// Ajouter à la fin 

tableau.push('toto');
console.log(tableau);

// Ajouter au debut

tableau.unshift('titi');
console.log(tableau);

// Retirer le dernier élément d'un tableau

tableau.pop();
console.table(tableau);


// Retirer le premier element du tableau

tableau.shift();
console.log(tableau);

// Retirer un element n'importe ou dans le tableau

 tableau.splice(3, 1);
console.table(tableau);
