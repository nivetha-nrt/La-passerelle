// Créer un programme qui demande à l'utilisateurs d'entrer un nombre

// Si le nombre est un multiple de 3, afficher 'fizz'

//  Si le nombre est un multiple de 5, afficher 'buzz'

// Si le nombre est un multiple de 3 et de 5, afficher 'fizzbuzz'

// Sinon, afficher 'Rien de spécial'


let prompt = require('prompt-sync')();
let number = prompt('Choisissez un nombre : ');

if (number%3 == 0 && number%5 == 0) {
    console.log ('fizzbuzz');
}
else if (number%5 == 0) {
    console.log ('buzz');
}

else if (number%3 == 0) {
    console.log ('fizz');
}

else {
    console.log ("Rien de spécial")
}