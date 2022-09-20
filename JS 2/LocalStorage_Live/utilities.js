// --- Fonctions utilitaires

// 1) Fonction pour récupérer la saisie du formulaire
// - Une fonction qui acceptera pour paramètre un selecteur CSS sous forme de chaîne de caractère, et qui retournera l'attribut value de l'input correspondant au selecteur

function getFormFieldValue(selector){
    let input = document.querySelector(selector);
    return input.value;
}

// 2) Fonction pour sauvegarder dans le local storage