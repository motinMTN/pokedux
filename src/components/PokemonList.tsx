import PokemonCard from "./PokemonCard";
import "../assets/css/PokemonList.css";

const PokemonList = ({ pokemons }) => {    
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} image={pokemon.sprites.other.showdown.front_default} firstType={pokemon.types[0].type.name} key={pokemon.weight} />
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};

export default PokemonList;