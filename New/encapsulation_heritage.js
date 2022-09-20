
class Moteur
{
    constructor(carburant, nombreChevaux)
    {
        this.carburant        = carburant;
        this.nombreChevaux    = nombreChevaux;
    }

    afficherDonnees()
    {
        console.log('Caractéristiques du moteur :');
        console.log('Type de carburant : ' + this.carburant);
        console.log('Nombre de chevaux : ' + this.nombreChevaux);
    }

}

class Vehicule
{
    couleur;
    dateFabrication;
    marque;
    moteur;


    constructor(marque, couleur, dateFabrication)
    {
        this.couleur         = couleur;
        this.dateFabrication = dateFabrication;
        this.marque          = marque;
        this.moteur          = new Moteur("essence", 250);
    }

    modifierCouleur(couleur)
    {
        this.couleur = couleur;
    }

    renvoyerCouleur()
    {
        return this.couleur;
    }
}


class Moto extends Vehicule
{
    afficherDonnees()
    {
        console.log('Caractéristiques de la moto :');
        console.log('Marque : ' + this.marque);
        console.log('Couleur : ' + this.couleur);
        console.log('Date de fabrication : ' + this.dateFabrication);
    }
}


class Voiture extends Vehicule
{
    constructor(marque, couleur, dateFabrication, puissanceClimatisation)
    {
        this.puissanceClimatisation = puissanceClimatisation;

        // Appelle le constructeur de la classe parent (donc le constructeur de Vehicule)
        super(marque, couleur, dateFabrication);
    }

    afficherDonnees()
    {
        console.log('Caractéristiques de la voiture :');
        console.log('Marque : ' + this.marque);
        console.log('Couleur : ' + this.couleur);
        console.log('Date de fabrication : ' + this.dateFabrication);
        console.log('Puissance climatisation (en watts) : ' + this.puissanceClimatisation);
    }

    demarrer()
    {
        console.log("La voiture $this->marque démarre en trombe !");
    }

    klaxonner()
    {
        console.log('Tuuuut !');
    }
}



// ************** CODE UTILISANT LES CLASSES

let voiture = new Voiture('Peugeot', 'bleu', new DateTime('05/03/1956'), 250);

console.log(voiture.renvoyerCouleur());   // bleu

voiture.modifierCouleur('gris');

console.log(voiture.renvoyerCouleur());   // gris


let moto = new Moto('Suzuki', 'rouge', new DateTime('10/08/2013'));

console.log(moto.renvoyerCouleur());      // rouge