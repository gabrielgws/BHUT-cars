import { ChangeEvent, useCallback } from "react";
import { useCarsContext, useHelpersContext } from "../../../../context/hooks";
import { BackButton, Container, FilterField, FiltersBox, FilterSelectField, FilterTitle, Title } from "./style";

const FilterModal = () => {

    const {filters, updateFilters} = useCarsContext();
    const {closeModal} = useHelpersContext();

    const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>, filter: 'price' | 'age') => {
        switch (filter) {
            case 'price':
                updateFilters({...filters, price: e.target.value})
                closeModal()
                return
            case 'age':
                updateFilters({...filters, age: e.target.value})
                closeModal()
                return
        }
    }, [closeModal, filters, updateFilters]);

    return (
        <Container>
            <Title>Aplicar Filtros</Title>
            <FiltersBox>
                <FilterField>
                    <FilterTitle>Por Preço</FilterTitle>
                    <FilterSelectField
                        value={filters.price}
                        onChange={e => handleChange(e, 'price')}
                    >
                        <option value=''>Qualquer</option>
                        <option value='5000'>até 5000</option>
                        <option value='10000'>até 10000</option>
                        <option value='20000'>até 20000</option>
                        <option value='30000'>até 30000</option>
                        <option value='40000'>até 40000</option>
                        <option value='50000'>até 50000</option>
                        <option value='60000'>até 60000</option>
                        <option value='70000'>até 70000</option>
                        <option value='80000'>até 80000</option>
                        <option value='90000'>até 90000</option>
                        <option value='100000'>até 100000</option>
                    </FilterSelectField>
                </FilterField>
                <FilterField>
                    <FilterTitle>Por Idade</FilterTitle>
                    <FilterSelectField
                        value={filters.age}
                        onChange={e => handleChange(e, 'age')}
                    >
                        <option value=''>Qualquer</option>
                        <option value='1'>1 ano ou menos</option>
                        <option value='2'>até 2 anos</option>
                        <option value='5'>até 5 anos</option>
                        <option value='10'>até 10 anos</option>
                    </FilterSelectField>
                </FilterField>
            </FiltersBox>
            <BackButton onClick={closeModal}>Voltar</BackButton>
        </Container>
    )
}

export default FilterModal;