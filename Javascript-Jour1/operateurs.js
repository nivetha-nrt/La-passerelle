/*
//Addition
console.log(5 + 5);

// ! aux types
console.log('5' + 5); 
console.log('Résultat de l\'addition : ' + (5 + 5));
console.log (58/0);

//Concatétation


//Soustraction 
console.log(10 - 5);

//Division
console.log(32 / 6);
console.log (78/0); //Infinity

//Multiplication

console.log(5 * 5); //25

//Modulo: reste de la division euclidienne d'un nombre par un autre
console.log(7%3); //1

//Puissance
console.log(2**8);

// Arrondir à l'inférieur
let inférieur = Math.floor(1.7);

//Arrondir au supérieur
let sup = Math.ceil(1.5894);
console.log(sup)

//Arrondir au plus proche
let Arrondir=Math.round(7.5);
console.log('Arrondi de 7.5 au plus proche: '+Arrondir);

//Random
let Rand = Math.random();
console.log(Rand);

Rand = Rand*10;
console.log(Rand);

Rand = Math.floor(Rand);
console.log(Rand);


//Pi

const pi = Math.PI();*/

console.log ('Addition : ' + (10+5));
console.log ('Soustraction : ' + (10-5));
console.log ('Multiplication : ' + (10*5));
console.log ('Division : ' + (10/5));

console.log ('Modulo : 10 % 5 = ' + (10%5));
console.log ('Modulo : 12 % 5 = ' + (12%5));
console.log ('Puissance : 10 ** 5 = ' + (10**5));

console.log ('Pi : ' + Math.PI); 
let max = 10;
console.log('Voici un nombre aléatoire entre 0 et 9 : ' + Math.floor(Math.random()*max));
console.log("Et en voici un autre, ou pas d'ailleurs :" +  Math.floor(Math.random()*max));

let a = 4;
let b = 3;
let hyp = Math.hypot(a, b);
console.log ('Soit un triangle dont les cotés adjacents font 4 et 3.');
console.log ("L'hypoténuse fait :" + hyp);









