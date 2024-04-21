import PokemonCard from "./PokemonCard";
import "../assets/css/PokemonList.css";

const PokemonList = ({ pokemons }) => {    
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} image={pokemon.sprites.other.showdown.front_default} types={pokemon.types} key={pokemon.name} />
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};

export default PokemonList;