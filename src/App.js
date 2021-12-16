import './App.css';
import {useState} from 'react';

function App() {

  const [allPokemons, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')


  return (
    <div className="App">
      <div className='main_container'>
        <h1>Hello</h1>
      </div>
      
    </div>
  );
}

export default App;
