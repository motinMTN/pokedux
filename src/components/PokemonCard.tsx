import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../assets/css/pokemonCard.css";


const PokemonCard = () => {
    return (
        <Card className="pokemon-card" title="Ditto" cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png" alt="Ditto" />}>
            <Meta description="fire,magic " />
        </Card>
    );
}

export default PokemonCard;