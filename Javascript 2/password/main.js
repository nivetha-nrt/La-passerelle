/*
 * L'objectif de l'exercice est d'avoir un champ de saisie de mot de passe
 * qui donne la possibilité d'afficher la saisie par le biais d'une icône sur
 * laquelle on clique (typiquement un oeil qui s'ouvre puis se ferme). C'est
 * important d'un point de vue UX afin de permettre l'utilisateur de vérifier
 * sa saisie surtout lorsque celle-ci est complexe (majuscules puis minuscules, etc).
 */

// ---- VARIABLES ET CONSTANTES GLOBALES


// L'objet DOM représentant la balise <i>

    let icon = document.querySelector('.far.fa-eye') ;
   console.log(icon); 
    // L'objet DOM représentant la balise <input>
    let input = document.getElementById('login');
    
    
// ---- FONCTIONS

function reveler () {
    // Changer le type de l'input en "text"
    input.type = "text";
    // input.setAttribut ('type', 'text')
    // Changer l'icone pour celle avec l'oeil barré
    icon.classList.replace('fa-eye', 'fa-eye-slash');
}

function cacher () {
    // Changer le type de l'input en "password"
    input.type = "password";
    // input.setAttribut ('type', 'text')
    // Changer l'icone pour celle avec l'oeil ouvert
    icon.classList.replace('fa-eye-slash', 'fa-eye');
   
}

function toggleIcon() {
    if (icon.classList.contains ('fa-eye')) {
        reveler();
    } else {
        cacher();
    }
}


// ---- CODE PRINCIPAL

icon.addEventListener("click", toggleIcon);