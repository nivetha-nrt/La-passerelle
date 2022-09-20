// ************** PROGRAMMATION PROCÉDURALE


// Données voiture

let voitureMarque          = 'Renault';
let voitureCouleur         = 'rouge';
let voitureDateFabrication = new Date('15/02/2021');

// Fonctions voiture

function afficherDonneesVoiture()
{
    console.log('Caractéristiques de la voiture :');
    console.log('Marque : ', voitureMarque);
    console.log('Couleur : ', voitureCouleur);
    console.log('Date de fabrication : ', voitureDateFabrication);
}

function demarrerVoiture()
{
    console.log(`La voiture ${voitureMarque} démarre en trombe !`);
}

function klaxonnerVoiture()
{
    console.log('Tuuuut !');
}

// Autres fonctions, qui n'ont rien à voir avec la voiture

function autreFonctionEnDehorsDeLaVoiture()
{
    voitureCouleur = 'bleu';    // On décide de modifier les données tranquillement sans que ça dérange
}


/*
 * Mode de programmation procédural :
 * - Les données sont dans des variables globales, partagées par les fonctions de la voiture
 * - Les données étant globales, n'importe qui peut faire n'importe quoi avec... DANGER !
 * - Les variables étant globales elles ont le mot "Voiture" dans leur nom systématiquement afin qu'il n'y ait pas de collision avec d'autres variables
 * - Les fonctions ont le mot "Voiture" dans leur nom systématiquement afin de ne pas les confondre avec autre chose
 * 
 * En bref :
 *   > tout est open bar, n'importe qui peut faire n'importe quoi avec les données.
 *   > si on ne nomme pas bien les choses (mettre le mot voiture partout pour comprendre de quoi on parle par exemple), l'organisation du code devient chaotique
 */



// ************** PROGRAMMATION ORIENTÉE OBJET

class Voiture
{
    constructor(marque, couleur, dateFabrication)
    {
        this.couleur         = couleur;
        this.dateFabrication = dateFabrication;
        this.marque          = marque;
    }

    afficherDonnees()
    {
        console.log('Caractéristiques de la voiture :');
        console.log('Marque : ', this.marque);
        console.log('Couleur : ', this.couleur);
        console.log('Date de fabrication : ', this.dateFabrication);
    }

    demarrer()
    {
        console.log(`La voiture ${this.marque} démarre en trombe !`);
    }

    klaxonner()
    {
        console.log('Tuuuut !');
    }
}

// Autres fonctions, qui n'ont rien à voir avec la voiture

function autreFonctionEnDehorsDeLaVoiture()
{
    // voitureCouleur = 'bleu';    // On ne peut plus modifier les données de la voiture !
    
    let voiture = new Voiture('Peugeot', 'bleu', new Date('05/03/1956'));
    console.log(voiture.couleur); // bleu

    voiture.couleur = 'gris';
    console.log(voiture.couleur); // gris

}


/*
 * Mode de programmation procédural :
 * - Les données sont dans des variables globales, partagées par les fonctions de la voiture
 * - Les données étant globales, n'importe qui peut faire n'importe quoi avec... DANGER !
 * - Les variables étant globales elles ont le mot "Voiture" dans leur nom systématiquement afin qu'il n'y ait pas de collision avec d'autres variables
 * - Les fonctions ont le mot "Voiture" dans leur nom systématiquement afin de ne pas les confondre avec autre chose
 * 
 * En bref :
 *   > tout est open bar, n'importe qui peut faire n'importe quoi avec les données.
 *   > si on ne nomme pas bien les choses (mettre le mot voiture partout pour comprendre de quoi on parle par exemple), l'organisation du code devient chaotique
 */