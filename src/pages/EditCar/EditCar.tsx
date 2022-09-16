import { Navigate, useParams } from "react-router-dom";
import CarForm from "../../components/CarForm/CarForm";
import { Title } from "./style";


const EditCarPage = () => {

    const {id} = useParams();

    if (!id) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Title>Detalhes do Carro</Title>
            <CarForm id={id} />
        </div>
    )
};

export default EditCarPage;