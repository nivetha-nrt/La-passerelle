import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Bloc1 from './components/Bloc1';
import Bloc2 from './components/Bloc2';
import Card from './components/Card';

function App() {

  //definition de variable d'etat
  const [message, setMessage] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [objApi, setObjApi] = useState({});

  //function qui va changer l'etat de la variable inputSearch
  function changeValueSearch(e){
    setInputSearch(e.currentTarget.value);
  }

  function affiche(value){
    setMessage(value);
    setTimeout(function(){
      setMessage("");
    }, 2000);
  }

  //use effect qui surveille l'etat des variables message et inputSearch
  useEffect(() =>{

    fetch('http://api.themoviedb.org/3/search/tv?api_key=f33cd318f5135dba306176c13104506a&query='+inputSearch)
    .then(function(headers){
      return headers.json();
    }).then(function (data) {
      setObjApi(data);
    });
  }, [message, inputSearch]);

  //useEffect qui se declenche au chargement du composant
  useEffect(() => {
    console.log('demarrage');
  }, []);

  //definition d'un tableau d'objets
  const tab = [
    {
      'title':'bloc 1',
      'content':'lorum ipsum',
      'btnName':'Alert',
      'btnClass':'primary'
    },
    {
      'title':'bloc 2',
      'content':'lorum ipsumsd gsdfgs dfgsdfg',
      'btnName':'Alert',
      'btnClass':'default'
    },
    {
      'title':'bloc 3',
      'content':'lorum ipsum',
      'btnName':'Alert',
      'btnClass':'success'
    },
    {
      'title':'bloc 4',
      'content':'lorum ipsumdfgherzerte',
      'btnName':'Alert',
      'btnClass':'warning'
    },
    {
      'title':'bloc 5',
      'content':'lorum ipsum g hdfgh dfgh',
      'btnName':'Alert',
      'btnClass':'info'
    },
    {
      'title':'bloc 6',
      'content':'lorum ipsum',
      'btnName':'Alert',
      'btnClass':'danger'
    }
  ]

  return (
    <div className="App">
      <h1>Hello world</h1>
      <div className='container'>
        <div className='row'>
          <input type="text" onChange={changeValueSearch} value={inputSearch}/>
        </div>
        <div className='row'>
          {message}
        </div>
        <div className='row'>
          <ul>
            <li><Link to={'/'}>Accueil</Link></li>
            <li><Link to={'page2/'+tab[0].content}>Page2</Link></li>
          </ul>
        </div>
        <div className='row'>
          <Routes>
            <Route path='/' element={<Bloc1></Bloc1>}></Route>
            <Route path='/page2/:id' element={<Bloc2></Bloc2>}></Route>
          </Routes>
        </div>
        <div className='row'>
          {
            tab.map((element, i) => {
              return <Card key={i} affiche={affiche} infos={element}></Card>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
