import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../assets/css/PokemonCard.css";
import { StarOutlined } from "@ant-design/icons";


const PokemonCard = ({name}) => {
    return (
        <Card className="pokemon-card" title={name} cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png" alt="Ditto" />} extra={<StarOutlined/>}>
            <Meta description="fire,magic " />
        </Card>
    );
}

export default PokemonCard;