// --- Fonctions utilitaires

// 1) Fonction pour récupérer la saisie du formulaire
// - Une fonction qui acceptera pour paramètre un selecteur CSS sous forme de chaîne de caractère, et qui retournera l'attribut value de l'input correspondant au selecteur

function getFormFieldValue(selector){
    let input = document.querySelector(selector);
    return input.value;
}

function setFormFieldValue(selector, value){
    document.querySelector(selector).value = value;
}

// 2) Fonction pour sauvegarder dans le local storage
/*- créer une fonction qui acceptera pour paramètre un nom (chaîne de caractères) et notre carnet d'adresses, et qui sauvegardera notre carnet d'adresses dans le local storage sous le nom qu'on lui a donné*/

function saveContactsToLocalStorage(nom, addressBook) {
    let addressBookJSON = JSON.stringify(addressBook);
    localStorage.setItem(nom, addressBookJSON);
}
/*- créer une fonction qui acceptera pour paramètre un nom, et qui retournera l'objet correspondant à ce nom dans le localStorage */

function retrieveContactsFromLocalStorage(nom){
    let contactsJSON = localStorage.getItem(nom);
    return  JSON.parse(contactsJSON);
}