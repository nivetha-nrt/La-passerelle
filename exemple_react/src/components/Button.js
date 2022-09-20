
function Button(props){

    function imprConsole(){
        alert('la valeur est de ' + props.compteur);
    }

    function Ajout(){
        props.affiche("Vous venez d'incrementer");
        props.increment();
    }

    function Retirer(){
        props.affiche("Vous venez de decrementer");
        props.decrement();
    }

    return(
        <>
            <span onClick={Ajout} className="btn btn-default">+</span>
            <button onClick={imprConsole} type="button" className={'btn btn-' + props.class }>
                {props.name}
            </button>
            <span onClick={Retirer} className="btn btn-default">-</span>
        </>
    )
}

export default Button;