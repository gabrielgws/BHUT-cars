import { Container, IconButton, Searchbar } from "./style";
import {BiFilter} from "react-icons/bi"
import { useCarsContext, useHelpersContext } from "../../../context/hooks";

const HomeSearchbar = () => {
    const {filters, updateFilters} = useCarsContext();
    const {openModal} = useHelpersContext();

    return (
        <Container>
            <Searchbar
                id="searchbar"
                type="text"
                placeholder="Qual carro você procura hoje?"
                value={filters.text}
                onChange={e => updateFilters({...filters, text: e.target.value})}
            />
            <IconButton onClick={() => openModal('filter')}>
                <BiFilter />
            </IconButton>
        </Container>
    )
}

export default HomeSearchbar;