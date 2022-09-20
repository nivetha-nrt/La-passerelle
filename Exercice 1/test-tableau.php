<?php 
    $maVar = '';
    const MA_CONSTANTE = '';



    $maVar1 = 'Coucou'; // string
    $maVar2 = true;     // booléen   
    $maVar3 = 0;        // integer (entier)
    $maVar4 = 0.0;      // float (décimal, virgule flottante)
    $semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];       // Array (tableau)


echo 'Avec var_dump() : '; 

echo '<br>';

echo '<pre>'; 
var_dump($semaine);
echo '</pre>';


echo 'Avec print_r() : ';

echo '<br>';

echo '<pre>'; 
print_r($semaine);
echo '</pre>';