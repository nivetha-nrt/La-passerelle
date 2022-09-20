// "Nous sommes le mardi 2 juin 2020, il est 14h21 et 38 secondes."

let today = new Date();

// Tableau avec les jours de la semaine


weekDay = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];



// Tableau avec les mois de l'année

month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];


// Etape intermédiaire: créer une variable pour chaque "donnée" qui vous servira à afficher l'heure: jour de la semaine, numéro du jour, mois, année, heure, minutes, secondes

let weekDay = weekDay[today.getDay()];
let monthDay = today.getDate();
let year = today.getFullYear();
let month = months[today.getMonth()];
let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// Construction de la chaîne de caractères à afficher

console.log('Nous sommes le ' + weekDay + ' ' + monthDay + ' ' + month + year + ',  il est ' + hour + 'h' + minutes + 'et ' + seconds + "secondes.")