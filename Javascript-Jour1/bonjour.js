"use strict";

// CHARGEMENT DU MODULE 'prompt-sync'
let prompt = require('prompt-sync')();
let name = prompt('Quel est votre nom ? ');

console.log('Bonjour, ' + name + ' !');
