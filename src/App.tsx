import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from './actions';
import { Col } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logo from './statics/logo.svg';
import { getPokemon, getPokemonDetails } from './api';
import './App.css'


function App() {  
  // const [pokemons, setPokemons] = useState([]);
  
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon =>
        getPokemonDetails(pokemon)
      ));
      dispatch(setPokemons(pokemonsDetailed));
    }

    fetchPokemons();
  },[])

  return (
    <>    
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" className='logo_img'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>     
      {/* <PokemonCard /> */}
      <PokemonList pokemons={pokemons}/>
    </>
  )
}

export default App;
