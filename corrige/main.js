// Liste des touches du clavier.
const TOUCHE_BAS    = 40;
const TOUCHE_DROITE = 39;
const TOUCHE_GAUCHE = 37;
const TOUCHE_HAUT   = 38;

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#value_of_keycode


function onClickButton()
{
    // Changer la couleur du rectangle lorsqu'on clique sur le bouton (regarder le CSS).
    const rectangle = document.getElementById('rectangle');

    rectangle.classList.toggle('autre-couleur');
}

function onKeyDown(event)
{
    // Les gestionnaires d'évènements reçoivent un objet event avec les informations sur ce qu'il s'est passé.

    // Par exemple pour les souris : https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
    // Dans notre cas c'est pour le clavier : https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent
    let left, top;

    // 1- Rechercher le rectangle.
    const rectangle = document.getElementById('rectangle');

    // 2- Gérer les 4 touches du clavier fléchées pour déplacer en pixels le rectangle, en utilisant la propriété CSS left ou top.
    switch(event.keyCode)
    {
        // 2-1 Pour chaque touche il faut récupérer la position avec https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle
        // 2-2 Il faut ajouter ou soustraire à chaque fois quelques pixels supplémentaires, en utilisant la propriété DOM style du rectangle.

        case TOUCHE_DROITE:
        // Récupération de la propriété CSS left actuelle du rectangle.
        left = window.getComputedStyle(rectangle).left;

        rectangle.style.left = (parseInt(left) + 2) + 'px'; // construit une chaîne de type '0px', '-4px', '36px', etc.
        break;

        case TOUCHE_GAUCHE:
        // Récupération de la propriété CSS left actuelle du rectangle.
        left = window.getComputedStyle(rectangle).left;

        rectangle.style.left = (parseInt(left) - 2) + 'px'; // construit une chaîne de type '0px', '-4px', '36px', etc.
        break;

        case TOUCHE_BAS:
        // Récupération de la propriété CSS top actuelle du rectangle.
        top = window.getComputedStyle(rectangle).top;

        rectangle.style.top = (parseInt(top) + 2) + 'px'; // construit une chaîne de type '0px', '-4px', '36px', etc.
        break;

        case TOUCHE_HAUT:
        // Récupération de la propriété CSS top actuelle du rectangle.
        top = window.getComputedStyle(rectangle).top;

        rectangle.style.top = (parseInt(top) - 2) + 'px'; // construit une chaîne de type '0px', '-4px', '36px', etc.
        break;
    }
}


// 1- Rechercher le bouton
const button = document.getElementById('changement-couleur');

// 2- Installer un gestionnaire d'évènements clic dessus, qui emmène vers onClickButton
button.addEventListener('click', onClickButton);

// 3- Installer un gestionnaire d'évènements sur toute la page, pour détecter les touches du clavier
document.addEventListener('keydown', onKeyDown);