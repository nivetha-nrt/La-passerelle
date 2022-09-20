"use strict";

// CHARGEMENT DU MODULE 'prompt-sync'
let prompt = require('prompt-sync')();

let age = prompt('Quel âge avez-vous ? ');

console.log('Pfiou ! \x1b[33m%s\x1b[0m ?\nÇa commence à compter.', age);


npm install 'prompt-sync'