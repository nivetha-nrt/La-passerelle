<?php

class Moteur
{
    private $carburant;
    private $nombreChevaux;


    public function __construct($carburant, $nombreChevaux)
    {
        $this->carburant        = $carburant;
        $this->nombreChevaux    = $nombreChevaux;
    }

    public function afficherDonnees()
    {
        echo 'Caractéristiques du moteur :';
        echo 'Type de carburant : ' . $this->carburant;
        echo 'Nombre de chevaux : ' . $this->nombreChevaux;
    }

}

// La classe est abstraite : on ne peut pas l'instancier (on ne peut pas créer juste un véhicule)
// Pour s'en servir il faut utiliser une classe enfant qui va hériter de la classe abstraite (ici c'est Moto et Voiture)
abstract class Vehicule
{
    protected $couleur;
    protected $dateFabrication;
    protected $marque;
    protected $moteur;


    public function __construct($marque, $couleur, $dateFabrication)
    {
        $this->couleur         = $couleur;
        $this->dateFabrication = $dateFabrication;
        $this->marque          = $marque;
        $this->moteur          = new Moteur("essence", 250);
    }
/*

    VARIANTES POSSIBLES DE CONSTRUCTEURS

    public function __construct2($marque, $couleur, $dateFabrication, $moteur)
    {
        $this->couleur         = $couleur;
        $this->dateFabrication = $dateFabrication;
        $this->marque          = $marque;
        $this->moteur          = $moteur;
    }
    // new Moto('Suzuki', 'rouge', new DateTime('10/08/2013'), new Moteur("essence", 250));

    public function __construct3($marque, $couleur, $dateFabrication, $carburant, $nombreChevaux)
    {
        $this->couleur         = $couleur;
        $this->dateFabrication = $dateFabrication;
        $this->marque          = $marque;
        $this->moteur          = new Moteur($carburant, $nombreChevaux);
    }

    // new Moto('Suzuki', 'rouge', new DateTime('10/08/2013'), "essence", 250);
    
*/

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
        echo 'Marque : ' . $this->marque;
        echo 'Couleur : ' . $this->couleur;
        echo 'Date de fabrication : ' . $this->dateFabrication;
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
        echo 'Marque : ' . $this->marque;
        echo 'Couleur : ' . $this->couleur;
        echo 'Date de fabrication : ' . $this->dateFabrication;
        echo 'Puissance climatisation (en watts) : ' . $this->puissanceClimatisation;
    }

    public function demarrer()
    {
        echo "La voiture $this->marque démarre en trombe !";
    }

    public function klaxonner()
    {
        echo 'Tuuuut !';
    }
}



// ************** CODE UTILISANT LES CLASSES

$voiture = new Voiture('Peugeot', 'bleu', new DateTime('05/03/1956'), 250);

echo $voiture->renvoyerCouleur();   // bleu

$voiture->modifierCouleur('gris');

echo $voiture->renvoyerCouleur();   // gris


$moto = new Moto('Suzuki', 'rouge', new DateTime('10/08/2013'));

echo $moto->renvoyerCouleur();      // rouge