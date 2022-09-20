<?php

require_once 'Monster.php';

class Dragon extends Monster{

    public function __construct()
    { 
        parent::__construct();
        $this->name = 'dragon squelette';
       
    }
    public function presentation(){
        return 'Le monstre est un dragon squelette et il a '.$this->pv.' points de vie';
    }
}



?>