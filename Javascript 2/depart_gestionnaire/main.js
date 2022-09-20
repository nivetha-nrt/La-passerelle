
// ------- FONCTIONS

function onClickItem(event) {
    /*
     * event.currentTarget représente la balise qui a déclenché l'évènement
     * sur lequel on a installé le gestionnaire d'évènement de clic.
     */

    

    // 1- Récupération du fichier (le <li>) qui a déclenché l'évènement.
    let liClicked = event.currentTarget;

    // 2- Activation ou désactivation de la classe CSS de sélection.
    liClicked.classList.toggle('selected');
    
    // 3- Recherche de tous les éléments sélectionnés.
    let allSelectedElement = document.querySelectorAll('.selected');
    let count = allSelectedElement.length;

    // 4- Mise à jour du message indiquant le nombre de fichiers sélectionnés.
    if(count == 0) {
        paragraphe.textContent = 'Aucune sélection.'
    } else if ( count == 1 ) {
        paragraphe.textContent = '1 élément sélectionné.'
    } else {
        paragraphe.textContent = count + ' éléments sélectionnés.'
    }

}





// ------- CODE PRINCIPAL -------

// 1- Recherche de tous les <li> de la liste de fichiers.



// 2- Recherche du paragraphe <p> affichant le nombre d'éléments sélectionnés.


// a) se concentrer sur le premier li 

function changeColor () {
    premierLi.classList.toggle('selected');
}

let premierLi = document.querySelector('.far');
premierLi.addEventListener('click', changeColor);


// 3- Boucle sur la liste de fichiers pour installer un gestionnaire d'évènement de clic (fonction onClickItem).
let paragraphe = document.querySelector ('.selected-count')
let liste = document.querySelectorAll('li');

for (let index = 0; index < liste.length; index++) {
    liste[index].addEventListener('click', onClickItem);
    
}