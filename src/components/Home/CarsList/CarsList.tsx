import { Link } from "react-router-dom";
import { useCarsContext } from "../../../context/hooks";
import CarsItem from "../CarsItem/CarsItem";
import CarsItemSkeleton from "../CarsItem/Skeleton";
import { ButtonContainer, Container, NewCarButton, ResultsCounter, ShowButton, Title } from "./style";

const CarsList = () => {

    const { getCarsList, carsList, isFetching, hasNextPage, hasPreviousPage, nextPage, prevPage} = useCarsContext();

    return (
        <Container>
            <Title>Meus Carros</Title>
            <ResultsCounter>mostrando {getCarsList().length} de {carsList.length} resultados</ResultsCounter>
            <NewCarButton onClick={e => e.preventDefault()}>
                <Link to="/novo-carro">
                    Novo Carro
                </Link>
            </NewCarButton>
            {
                isFetching ?
                    <div style={{width: "100%"}}>
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                        <CarsItemSkeleton />
                    </div>    
                :
                <div style={{width: "100%"}}>
                    {
                        getCarsList().length ?
                        (<>
                            {getCarsList().map(item => <CarsItem key={item._id} {...item} />)}
                            <ButtonContainer>
                                {hasPreviousPage() && <ShowButton onClick={prevPage}>Ver Menos</ShowButton>}
                                {hasNextPage() && <ShowButton onClick={nextPage}>Ver Mais</ShowButton>}
                            </ButtonContainer>
                        </>)
                        :
                            <div>
                                <p style={{textAlign: 'center', fontWeight: 600}}>Nenhum carro foi encontrado.</p>
                            </div>
                    }
                </div>
            }
            
        </Container>
    )
}

export default CarsList;