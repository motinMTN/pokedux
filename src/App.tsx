import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd'
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logo from './statics/logo.svg';
import './App.css'



function App() {  
  // const [pokemons, setPokemons] = useState([]);
  
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
    
  const loading = useSelector(state => state.ui.loading);  

  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(fetchPokemonsWithDetails());    
  },[])

  return (
    <>    
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" className='logo_img'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>     
      {loading ?
        <Spin spinning size='large' /> :
        <PokemonList pokemons={pokemons} />
      }      
    </>
  )
}

export default App;
