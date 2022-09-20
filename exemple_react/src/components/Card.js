import { useState } from "react";
import Button from "./Button";

function Card(props){

    const [compteur, setCompteur] = useState(0);

    function increment(){
        let valeur = compteur + 1;
        setCompteur(valeur);
    }

    function decrement(){
        let valeur = compteur - 1;
        setCompteur(valeur);
    }

    return(
        <div className="card col-6">
            <div className="card-body">
                <h5 className="card-title">{props.infos.title}</h5>
                <p className="card-text">{props.infos.description}</p>
                <p>{compteur}</p>
                <Button affiche={props.affiche} compteur={compteur} increment={increment} decrement={decrement} name={props.infos.btnName} class={props.infos.btnClass}></Button>
            </div>
        </div>
    )
}

export default Card;