<?php


abstract class Monster{

    protected $pv;
    protected $name;

    public function __construct()
    {
        $this->pv = rand(200, 250);
        $this->name = '';
    }


    public function attack($adversaire)
    {
        $pv = $adversaire-> getPv();
        $pa = rand(30, 180);
        if(($pa > 30) && ($pa < 70)){
            $pv = $pv - $pa;
            $adversaire->setPv($pv);

            return 'Le joueur attaque avec 1 et inflige '.$pa.' point de degats';

        } else if(($pa > 74) && ($pa < 133)){
            $pv = $pv - $pa;
            $adversaire->setPv($pv);

            return 'Le joueur attaque avec 2 et inflige '.$pa.' point de degats';

        } else {
            $pv = $pv - $pa;
            $adversaire->setPv($pv);

            return 'Le joueur attaque avec 3 et inflige '.$pa.' point de degats';
        } 
    }


    public function getPv()
    {
        return $this->pv;
    }


    public function setPv($pv)
    {
        $this->pv = $pv;
    }
}



?>