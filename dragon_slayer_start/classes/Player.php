<?php 

class Player{

    protected $name;
    protected $pv;

    public function __construct ($name)
    {
        $this->name = $name;
        $this->pv = rand(200, 250);
    }

    // Coder l'attaque ici

    public function attack($adversaire)
    {
        $pv = $adversaire->getPv();
        $pa = rand(50, 150);
        if(($pa > 50) && ($pa < 100)){
            $pv = $pv - $pa;
            $adversaire->setPv($pv);

            return 'Le joueur attaque avec 1 et inflige '.$pa.' point de degats';

        } else if(($pa > 95) && ($pa < 128)){
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
