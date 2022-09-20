<?php

require_once 'Player.php';

class Angel extends Player{

    private $type;

    public function __construct($name)
    {
        $this->type = 'Ange';
        parent::__construct($name);
    }

    public function presentation(){
        return  'Le joueur s\'appel '.$this->name.' il est de type '.$this->type.' et il a '.$this->pv.' points de vie';
    }
}

?>