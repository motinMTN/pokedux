import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../assets/css/PokemonCard.css";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name, image, types }) => {
    const typesString = types.map(item => item.type.name).join(', ');

    return (
        <Card className="pokemon-card" title={name} cover={<img className="pokemon-image" src={image} alt={name} />} extra={<StarOutlined />}>
            <Meta description={typesString} />
        </Card>
    );
}

export default PokemonCard;