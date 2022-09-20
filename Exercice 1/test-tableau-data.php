<?php

$datas = [
	[
		"firstname" => "Imani",
		"lastname" => "Cruz",
		"phone" => "(546) 822-1535",
		"email" => "leo.elementum.sem@google.edu",
		"address" => "Ap #269-2239 Ante, Ave",
		"postalZip" => "1871",
		"city" => "LaSalle",
		"country" => "United States",
		"oder date" => "20/04/2022",
		"oder number" => "7"
	],
	[
		"firstname" => "Cooper",
		"lastname" => "Stevens",
		"phone" => "(527) 502-2421",
		"email" => "suspendisse.aliquet@google.edu",
		"address" => "Ap #882-4366 Vivamus Rd.",
		"postalZip" => "7668",
		"city" => "Little Rock",
		"country" => "United States",
		"oder date" => "29/05/2022",
		"oder number" => "1"
	],
	[
		"firstname" => "Amela",
		"lastname" => "Skinner",
		"phone" => "1-838-544-5486",
		"email" => "metus.vitae.velit@hotmail.com",
		"address" => "Ap #969-7945 Sollicitudin Street",
		"postalZip" => "73722",
		"city" => "Edmundston",
		"country" => "United States",
		"oder date" => "19/04/2022",
		"oder number" => "2"
	],
	[
		"firstname" => "Meredith",
		"lastname" => "Hardy",
		"phone" => "1-312-580-3381",
		"email" => "magna@aol.ca",
		"address" => "Ap #564-2173 Id Street",
		"postalZip" => "5222",
		"city" => "Bonnyville",
		"country" => "United States",
		"oder date" => "14/05/2022",
		"oder number" => "10"
	],
	[
		"firstname" => "Ray",
		"lastname" => "Dale",
		"phone" => "1-363-202-1282",
		"email" => "volutpat@yahoo.org",
		"address" => "947-1631 Vehicula Road",
		"postalZip" => "215366",
		"city" => "Midway",
		"country" => "United States",
		"oder date" => "17/04/2022",
		"oder number" => "4"
	],
	[
		"firstname" => "Leonard",
		"lastname" => "Rhodes",
		"phone" => "1-605-564-0254",
		"email" => "fermentum.vel@outlook.couk",
		"address" => "818-9437 Mollis Rd.",
		"postalZip" => "777922",
		"city" => "Bathurst",
		"country" => "United States",
		"oder date" => "16/04/2022",
		"oder number" => "5"
	],
	[
		"firstname" => "Hall",
		"lastname" => "Woodard",
		"phone" => "1-931-639-9611",
		"email" => "dictum.magna@google.couk",
		"address" => "605-221 Bibendum. Avenue",
		"postalZip" => "549071",
		"city" => "Cape Breton Island",
		"country" => "Canada",
		"oder date" => "04/05/2022",
		"oder number" => "8"
	],
	[
		"firstname" => "Dominic",
		"lastname" => "Alexander",
		"phone" => "1-736-227-3860",
		"email" => "in.felis@google.org",
		"address" => "Ap #338-6903 Mauris Road",
		"postalZip" => "2746 TC",
		"city" => "Pangnirtung",
		"country" => "United States",
		"oder date" => "22/04/2022",
		"oder number" => "1"
	],
	[
		"firstname" => "Keely",
		"lastname" => "Finch",
		"phone" => "1-734-424-6064",
		"email" => "sit.amet@yahoo.com",
		"address" => "584-7183 Cursus St.",
		"postalZip" => "94566",
		"city" => "Armstrong",
		"country" => "United States",
		"oder date" => "17/07/2022",
		"oder number" => "7"
	],
	[
		"firstname" => "Amity",
		"lastname" => "Cooke",
		"phone" => "1-575-961-1756",
		"email" => "sed@aol.edu",
		"address" => "Ap #959-2036 Vitae Av.",
		"postalZip" => "7217-0688",
		"city" => "Omaha",
		"country" => "United States",
		"oder date" => "12/05/2022",
		"oder number" => "4"
	]
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
    <h1>Récapitulatif des commandes</h1>

    <table>
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Numéro de téléphone</th>
                <th>Email</th>
                <th>Adresse</th>
                <th>C.P</th>
                <th>Ville</th>
                <th>Pays</th>
                <th>Date de la commande</th>
                <th>Numéro de commande</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($datas as $data) : ?>
                <tr>
                    <td> <?=$data['firstname']?> </td>
                    <td> <?=$data['lastname']?> </td>
                    <td> <?=$data['phone']?> </td>
                    <td> <?=$data['email']?> </td>
                    <td> <?=$data['address']?> </td>
                    <td> <?=$data['postalZip']?> </td>
                    <td> <?=$data['city']?> </td>
                    <td> <?=$data['country']?> </td>
                    <td> <?=$data['oder date']?> </td>
                    <td> <?=$data['oder number']?> </td>
                </tr>
            <?php endforeach; ?>    
        </tbody>
    </table>
    
</body>
</html>