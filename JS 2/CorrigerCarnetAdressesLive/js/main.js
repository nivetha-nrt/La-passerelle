// --- Constantes et variables globales

// Objets DOM.

// Le carnet d'adresses (tableau d'objets représentant chacun un contact).
let contacts = new Array();

// stocker dans une constante le nom de notre carnet d'adresses, pour y faire référence ultérieurement
// les constantes sont souvent notées en majuscules.
const CARNET = "contacts";

// --- Fonctions du carnet d'adresses

/* Etape Intermédiaire */

// 1) Fonction qui permet d'ajouter un contact à notre carnet d'adresses
function addContact(prenom, nom, tel, mail) {
    let contact = {
        firstname: prenom,
        lastname: nom,
        phoneNum: tel,
        email: mail
    };
    contacts.push(contact);
}

function editContact(index, prenom, nom, tel, mail){
    let contact = {
        firstname: prenom,
        lastname: nom,
        phoneNum: tel,
        email: mail
    };

    contacts.splice(index, 1, contact);
}

function deleteAllContacts(){
    // 1 - vider contacts
    contacts = [];
    // contacts = new Array();
    // contacts.splice(0, contacts.length);
    // 2 - vider le localStorage
    // 2a- méthode "bourrin"
    // localStorage.clear();
    // 2b - méthode sélective
    // localStorage.removeItem(CARNET);
    //2c - méthode "malin"
    saveContactsToLocalStorage(CARNET, contacts);

    // 3 - mettre à jour le HTML
    refresh();
}
// 2) Fonction refresh
function refresh() {
    // Récupérer la liste
    let liste = document.getElementById('address-book');
    // Vider la liste
    liste.innerHTML = '';
    // Pour chaque élément de notre carnet d'adresses Javascript, la fonction va insérer dans le HTML de la liste un nouvel élément de liste qui contiendra les informations correspondantes
    for (let i = 0; i < contacts.length; i++) {
        liste.innerHTML += `<li class="card">
        <div class="card-body">
            <i class="fas fa-pen-to-square edit-contact" data-index="${ i }"></i>
            <h5 class="card-title">${contacts[i].lastname} ${contacts[i].firstname}</h5>
            <p class="card-text">${contacts[i].phoneNum}</p>
            <p class="card-text">${contacts[i].email}</p>
        </div>
    </li>`;
    }

    // récupérer toutes les icones edit de notre html
    let allEditBtns = document.querySelectorAll('.edit-contact');
    // ajout d'un gestionnaire d'évènements pour chacune d'entre elles
    for (let index = 0; index < allEditBtns.length; index++) {
        const editIcon = allEditBtns[index];
        editIcon.addEventListener('click', switchToEditMode);
    }
}


// 3) Fonction de sauvegarde de contact (déclenchée au clic)
function saveContact() {
    
    // récupération des valeurs du formulaire
    let nom = getFormFieldValue('#lastname');
    let prenom = getFormFieldValue('#firstname');
    let tel = getFormFieldValue('#phone_num');
    let mail = getFormFieldValue('#email');
    
    if (saveBtn.dataset.mode == 'create'){
        // création d'un nouveau contact
        addContact(nom, prenom, tel, mail);
    } else if (saveBtn.dataset.mode == 'edit'){
        // édition d'un contact existant
        editContact(saveBtn.dataset.index ,nom, prenom, tel, mail);
    }
    
    // mise à jour de l'affichage HTML
    refresh();
    // réinitialisation du formulaire
    document.querySelector('form').reset();
    //sauvegarder le carnet d'adresses dans le local Storage
    saveContactsToLocalStorage(CARNET, contacts);
}

function switchToEditMode(event) {
    // récupération de l'icone qui a déclenché l'évènement
    let iconeCible = event.currentTarget;
    console.log(iconeCible);
    //  stockage de l'index du contact dans une variable
    let dataIndex = iconeCible.dataset.index;
    
    let leContactQuiNousInteresse = contacts[dataIndex];

    // remplissage des champs de formulaire par les infos du contact
    setFormFieldValue('#lastname', leContactQuiNousInteresse.lastname);
    setFormFieldValue('#firstname', leContactQuiNousInteresse.firstname);
    setFormFieldValue('#phone_num', leContactQuiNousInteresse.phoneNum);
    setFormFieldValue('#email', leContactQuiNousInteresse.email);

    // passage du bouton enregistrer en "mode" edit
    saveBtn.dataset.mode = 'edit';
    // ajout au bouton enregistrer de l'index de l'élément à modifier
    saveBtn.dataset.index = dataIndex;
}

// --- Code principal.

// verification de l'existence ou non d'un carnet d'adresses dans le local Storage
if(localStorage.getItem(CARNET) == null) {
    saveContactsToLocalStorage(CARNET, contacts);
} else {
    contacts = retrieveContactsFromLocalStorage(CARNET);
    refresh();
}

// ajout des gestionnaires d'évenements
let saveBtn = document.querySelector('#save-contact');
let deleteAllBtn = document.querySelector('#delete-address-book');

deleteAllBtn.addEventListener('click', deleteAllContacts);
saveBtn.addEventListener('click', saveContact);


