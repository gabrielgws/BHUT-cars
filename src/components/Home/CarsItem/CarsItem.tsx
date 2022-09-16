import { Link } from "react-router-dom";
import { CarItemProps } from "./models";
import { CarName, Container } from "./style";


const CarsItem = ({title, _id}: CarItemProps) => {
    return (
        <Link to={`/carro/${_id}`}>
            <Container>
                <CarName>{title}</CarName>
            </Container>
        </Link>
    )
}

export default CarsItem;