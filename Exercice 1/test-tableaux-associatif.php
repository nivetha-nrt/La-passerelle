<?php

$user = [
    'firstname' => 'Nive',
    'lastname'  => 'Ntr',
    'city'      => 'Paris',
    'zip'       => '75011',
    'job'       => 'Student'
];

$user2 = [
    'firstname' => 'Naïssa',
    'lastname'  => 'Thobor',
    'city'      => 'Tokyo',
    'zip'       => 'XXXXX',
    'job'       => 'Inconnu'
];
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
    <h1>Profil de l'utilisateur</h1>
    <h3>Nom&nbsp;:    <?=$user['lastname']?>    </h3>
    <h3>Prénom&nbsp;:    <?=$user['firstname']?>    </h3>
    <strong>Adresse&nbsp;:    <?=$user['city']?>  (<?=$user['zip']?>)   </strong><br>
    <strong>Métier&nbsp;:    <?=$user['job']?>    </strong>
</body>
</html>