import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../assets/css/PokemonCard.css";
import StarButton from "./StartButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, types, id, favorite }) => {
    const dispatch = useDispatch();
    const typesString = types.map(item => item.type.name).join(', ');
    
    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId:id}))
    }

    return (
        <Card className="pokemon-card" title={name} cover={<img className="pokemon-image" src={image} alt={name} />} extra={<StarButton isFavorite={favorite}  onClick={handleOnFavorite}/>}>
            <Meta description={typesString} />
        </Card>
    );
}

export default PokemonCard;