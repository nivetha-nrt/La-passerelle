<?php

/***************** CHARGEMENT DES DÉPENDANCES ************/

require_once ('lib/debug.php');

/***************** CHARGEMENT DU MODEL ******************/

require_once('model/database.php');
require_once('model/orders.php');



/***************** COEUR DU CONTROLEUR *****************/


// Vérifier si on a reçu le customerName par formulaire
if(isset($_POST['customerName'])) {

    // Si oui on le récupère
    $customerName = $_POST['customerName'];

}

// Récupère le nombre total de commandes
$nbOrders = getOrdersCount();


// Si on a un customerName
if(isset($customerName)) {
    // On charge seulement les commandes de ce(s) client(s)
    $orders = getOrdersByCustomerName(($customerName));
} else {
// Charge toutes les commandes
    $orders = getAllOrders();
}


/***************** CHARGEMENT DE LA VUE ***************/

require_once('vues/index.phtml');