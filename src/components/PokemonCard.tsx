import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../assets/css/PokemonCard.css";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name, image, firstType }) => {
    return (
        <Card className="pokemon-card" title={name} cover={<img className="pokemon-image" src={image} alt={name} />} extra={<StarOutlined />}>
            <Meta description={firstType} />
        </Card>
    );
}

export default PokemonCard;