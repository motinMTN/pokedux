import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';
import { Col } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logo from './statics/logo.svg';
import getPokemon from './api';
import './App.css'

function App({pokemons, setPokemons}) {
  console.log("🚀 ~ App ~ pokemons:", pokemons)
  // const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
