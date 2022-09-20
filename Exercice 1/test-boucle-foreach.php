<?php 
    $listeDesMois = [
        'Janvier', 
        'Février', 
        'Mars', 
        'Avril', 
        'Mai', 
        'Juin', 
        'Juillet', 
        'Août', 
        'Septembre', 
        'Octobre', 
        'Novembre', 
        'Décembre'
    ];
    
    $listeSemaine = [
        'lundi', 
        'mardi', 
        'mercredi', 
        'jeudi', 
        'vendredi', 
        'samedi', 
        'dimanche'
    ];


    // echo '<pre>';
    // print_r($moisAnnee);
    // echo'</pre>';

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h2>Liste des mois de l'année</h2>

    <ul> 
        <?php foreach ($listeSemaine as $unSeulMois) :?>
            <li>
                <?=$unSeulMois?>
            </li>
        <?php endforeach; ?>
    </ul>



    <h2>Liste des jours de la semaine </h2>

    <ul>
        <?php foreach ($listeSemaine as $unSeulJour) :?>
            <li>
                <?=$unSeulJour?>
            </li>
        <?php endforeach; ?>
    </ul>

</body>
</html>

