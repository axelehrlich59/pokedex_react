import './App.css';
import {useState} from 'react';

function App() {

  const [allPokemons, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const resultPokemons = await fetch(loadMore)
    const dataRequest = resultPokemons.json()
    console.log(dataRequest)
  }


  return (
    <div className="app-container">
      <div className='main_container'>
          <h1>Pokemon Evolution</h1>
        <div className="pokemon-container">

        </div>
        <button className='load-more'>Load more</button>
      </div> 
    </div>
  );
}

export default App;
