<?php

// ************** PROGRAMMATION PROCÉDURALE


// Données voiture

$voitureMarque          = 'Renault';
$voitureCouleur         = 'rouge';
$voitureDateFabrication = new DateTime('15/02/2021');

// Fonctions voiture

function afficherDonneesVoiture()
{
    global $voitureMarque, $voitureCouleur, $voitureDateFabrication;

    echo 'Caractéristiques de la voiture :';
    echo 'Marque : ' . $voitureMarque;
    echo 'Couleur : ' . $voitureCouleur;
    echo 'Date de fabrication : ' . $voitureDateFabrication;
}

function demarrerVoiture()
{
    global $voitureMarque;

    echo "La voiture $voitureMarque démarre en trombe !";
}

function klaxonnerVoiture()
{
    echo 'Tuuuut !';
}


// Autres fonctions, qui n'ont rien à voir avec la voiture

function autreFonction1EnDehorsDeLaVoiture()
{
    global $voitureCouleur;

    $voitureCouleur = 'bleu';    // On décide de modifier les données tranquillement sans que ça dérange
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


// La classe est abstraite : on ne peut pas l'instancier (on ne peut pas créer juste un véhicule)
// Pour s'en servir il faut utiliser une classe enfant qui va hériter de la classe (ici c'est Moto et Voiture)

abstract class Vehicule 
{
    protected $couleur;
    protected $dateFabrication;
    protected $marque;

    public function __construct($marque, $couleur, $dateFabrication)
    {
        $this->couleur         = $couleur;
        $this->dateFabrication = $dateFabrication;
        $this->marque          = $marque;
    }

}


class Voiture extends Vehicule
{
    private $puissanceClimatisation;

    public function __construct($marque, $couleur, $dateFabrication, $puissanceClimatisation)
    {
        $this->puissanceClimatisation = $puissanceClimatisation;

        parent::__construct($marque, $couleur, $dateFabrication);
    }

    public function afficherDonnees()
    {
        echo 'Caractéristiques de la voiture :';
        echo 'Marque : '. $this->marque;
        echo 'Couleur : '. $this->couleur;
        echo 'Date de fabrication : '. $this->dateFabrication;
        echo 'Puissance climatisation (en watts) : '. $this->puissanceClimatisation;
    }

    public function demarrer()
    {
        echo "La voiture $this->marque démarre en trombe !";
    }

    public function klaxonner()
    {
        echo 'Tuuuut !';
    }

    public function modifierCouleur($couleur)
    {
        $this->couleur = $couleur;
    }

    public function renvoyerCouleur()
    {
        return $this->couleur;  
    }
}

class Moto extends Vehicule
{
    
    public function afficherDonnees()
    {
        echo 'Caractéristiques de la moto :';
        echo 'Marque : ', $this->marque;
        echo 'Couleur : ', $this->couleur;
        echo 'Date de fabrication : ', $this->dateFabrication;
    }
}


// Autres fonctions, qui n'ont rien à voir avec la voiture

function autreFonction2EnDehorsDeLaVoiture()
{
    // $voitureCouleur = 'bleu';    // On ne peut plus modifier les données de la voiture !

    $voiture = new Voiture('Peugeot', 'bleu', new DateTime('05/03/1956'), 250);
    
    echo $voiture->renvoyerCouleur();   // bleu

    //$voiture->couleur = 'gris';
    $voiture->modifierCouleur('gris');

    echo $voiture->renvoyerCouleur();   // gris
}


