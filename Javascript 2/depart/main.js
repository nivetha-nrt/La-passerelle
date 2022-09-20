/*
 * L'objectif de l'exercice est de permettre de changer l'image de l'ampoule par une
 * ampoule allumée ou éteinte, au fur et à mesure qu'on clique sur le bouton à côté.
 * Le bouton doit également changer avec l'action qui va se produire si on clique dessus.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES


// L'objet DOM représentant la balise <img>
let lightbulb = document.getElementById('lightbulb');

// L'objet DOM représentant la balise <button>
let toggleButton = document.querySelector('button'); 


// ---- FONCTIONS
// Fonction Allumer: Quand je clique sur le boutton, changer la source de mon img lightbulb 


function allumer () {
    lightbulb.src='./images/on.png';
    toggleButton.textContent = 'Eteindre la lumière';
}

function eteindre (){
    lightbulb.src='./images/off.png';
    toggleButton.textContent = 'Allumer la lumière';
}

function toggleLight () {
    if( toggleButton.textContent == 'Allumer la lumière') {
        allumer();
    } else {
        eteindre();
    }
}

// ---- CODE PRINCIPAL
// Ajouter un gestionnaire d'évènement au toggleButton, qui au click va appeler notre fonction

toggleButton.addEventListener('click', toggleLight)

