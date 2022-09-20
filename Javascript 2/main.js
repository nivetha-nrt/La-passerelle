/*
 * L'objectif de l'exercice est de réaliser un diaporama de photos qui s'affichent les
 * unes après les autres, toutes les 5 secondes. Puis ensuite de revenir à la première
 * photo et de recommencer, à l'infini. C'est ce qu'on appelle un carousel de photos.
 */
// opacity + z-index
// ---- VARIABLES ET CONSTANTES GLOBALES

let currentPhoto;       // Numéro de la photo courant affichée (indice dans le tableau ci-dessous)
let photos;             // Tableau d'objets DOM représentant les balises <img>

let delaiCarousel = 5000;

// ---- FONCTIONS

// 4 - fonction répétée toutes les 5s, pour mettre l'opacité de l'image en cours à 0, se positionner sur l'image suivante, et mettre son opacité à 1
function changePhoto() {
    // a - mettre l'opacité de la photo actuelle à 0
    photos[currentPhoto].style.opacity = 0;
    // b - passer à la photo suivante
    currentPhoto++;
    // c - attention à ne pas sortir du tableau
    if (currentPhoto == photos.length){
        // revenir au début du tableau
        currentPhoto = 0;
    }
    // d - mettre l'opacité de la photo actuelle à 1
    photos[currentPhoto].style.opacity = 1;
}


// ---- CODE PRINCIPAL

// 1 - Récupérer nos <img>
photos = document.querySelectorAll('.diaporama img');

// 2 - Faire en sorte que la première image soit à l'avant-plan, et que les autres suivent
for (let i = 0; i < photos.length; i++) {
    photos[i].style.zIndex = photos.length - i;
    
}

// 2bis - Déclarer la première photo du carousel
currentPhoto = 0;
// 3 - lancer le carousel
setInterval(changePhoto, delaiCarousel);