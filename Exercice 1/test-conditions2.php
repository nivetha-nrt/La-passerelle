<?php

// Jour actuel
$day = 'vendredi';

// Crée un message selon le jour
if ($day == 'vendredi') {
    echo 'C\'est bientot le week-end !<br>' ;
} else if ($day == 'samedi'|| $day == 'dimanche') {
    echo 'Youhou ! Apéro! <br>';
} else {
    echo 'Pffff ! Le week-end est encore loin<br>';
}

// Méthode switch

switch ($day) {
    case 'vendredi' :
        echo  'C\'est bientot le week-end !<br>' ;
        break;
    case 'samedi' : 
    case 'dimanche' :
        echo 'Youhou ! Apéro! <br>';
        break;   
    default :
        echo 'Pffff ! Le week-end est encore loin<br>';
        break;       
}