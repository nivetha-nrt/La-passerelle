// Chargement du module prompt-sync
let prompt = require('prompt-sync')();

// La TVA vaut 20%
const TVA = 20;

// Demander à l'utilisateur de saisir un prix/montant HT
let montantHT = prompt('Saisissez le montant HT : ');

// Répondre/afficher le prix/montannt TTC

console.log('Le montant TTC sera de ' + (parseFloat (montantHT) + (montantHT*TVA/100)));