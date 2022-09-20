<?php

require_once 'Player.php';

//extension de la classe abstraite
class Wizard extends Player{

    private $type;

    public function __construct($name)
    {
        $this->type = 'Magicien';
        //appel du constructeur de la classe parente
        parent::__construct($name);
    }

    public function presentation(){
        return 'Le joueur s\'appel '.$this->name.' il est de type '.$this->type.' et il a '.$this->pv.' points de vie';
    }

    

}