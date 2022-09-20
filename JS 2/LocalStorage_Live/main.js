let count = localStorage.getItem('count');
let countSpan = document.querySelector('span');
countSpan.textContent = count;

let concessionnaireJSON = localStorage.getItem('concessionnaire');
let concessionnaire = JSON.parse(concessionnaireJSON);

function increaseCount() {
    count++;
    // sauvegarder dans le local storage
    localStorage.setItem('count', count);
    countSpan.textContent = count;
}

function addNewCar() {
    let car = {
        couleur: document.querySelectorAll('input')[0].value,
        marque: document.querySelectorAll('input')[1].value
    }

    concessionnaire.push(car);

    let listeVoitures = document.querySelector('#liste-voitures');
    listeVoitures.innerHTML = '';
    for (let i = 0; i < concessionnaire.length; i++) {
        listeVoitures.innerHTML += `
        <li>
            <p>${concessionnaire[i].couleur}</p>
            <p>${concessionnaire[i].marque}</p>
        </li>`
    }

    document.querySelector('form').reset();

    // sauvegarder le concessionnaire
    let concessionnaireJSON = JSON.stringify(concessionnaire);
    localStorage.setItem('concessionnaire', concessionnaireJSON);
}

let button = document.querySelector('button');
let btnVoiture = document.querySelector('form button');

btnVoiture.addEventListener('click', addNewCar);
button.addEventListener('click', increaseCount);





