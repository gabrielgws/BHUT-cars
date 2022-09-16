import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { fetchCarsFromApi } from "../../functions/api";
import { CarType, ProviderProps, CarsContextType, FilterType } from "./Models";

const CarsContext = createContext({} as CarsContextType);

const CarsProvider = ({children}: ProviderProps) => {

    const [isFetching, setIsFetching] = useState(false);
    const [carsList, setCarsList] = useState<CarType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<FilterType>({text: '', price: '', age: ''});

    const getCarsList = useCallback(() => {
        let temp = Array.from(carsList);

        if (filters.text?.length) {
            temp = temp.filter(item => item.title.toLowerCase().includes(filters.text?.toLowerCase() || ''))
        }

        if (filters.price?.length) {
            temp = temp.filter(item => item.price && filters.price?.length ? parseInt(item.price) < parseInt(filters.price) : '')
        }

        if (filters.age?.length) {
            temp = temp.filter(item => {
                if (item.age && item.age >= 1000) {
                    const date = new Date();
                    const y = date.getFullYear();
                    return (y - item.age) <= parseInt(filters.age || '0')
                } else {
                    return item.age <= parseInt(filters.age || '0')
                }
            })
        }

        return temp.slice(0, 30 * currentPage)
    }, [carsList, currentPage, filters]);

    const hasNextPage = useCallback(() => {
        return getCarsList().length + 1 <= carsList.length
    }, [carsList.length, getCarsList]);

    const hasPreviousPage = useCallback(() => {
        return currentPage > 1;
    }, [currentPage]);

    const nextPage = useCallback(() => {
        setCurrentPage(crr => crr + 1);
    }, []);

    const prevPage = useCallback(() => {
        setCurrentPage(crr => crr - 1);
    }, []);

    const fetchCars = useCallback(async () => {
        setIsFetching(true);
        const {error, code, data} = await fetchCarsFromApi();
        if (error || !data) {
            // TODO: trigger snackbar
            console.log(code);
            setIsFetching(false);
            return
        }
        setCarsList(data);
        setIsFetching(false);
    }, []);

    const getCar = useCallback((id: string) => {
        const list = Array.from(carsList);
        const car = list.find(item => item._id === id);
        if (car) {
            return car;
        }
    }, [carsList]);

    const addCarToList = useCallback((car: CarType) => {
        const currentList = Array.from(carsList);
        currentList.push(car);
        setCarsList(currentList);
    }, [carsList]);

    const updateCarInList = useCallback((car: CarType) => {
        const currentList = Array.from(carsList);
        const currentCar = currentList.findIndex(item => item._id === car._id);

        if (currentCar === -1) {
            return
        }

        currentList[currentCar] = car;
        setCarsList(currentList);
    }, [carsList]);

    const deleteCarFromList = useCallback((id: string) => {
        const currentList = Array.from(carsList);
        const currentCar = currentList.findIndex(item => item._id === id);

        if (currentCar === -1) {
            return
        }

        currentList.splice(currentCar, 1);
        setCarsList(currentList);

    }, [carsList]);

    const updateFilters = useCallback((filters: FilterType) => {
        setFilters(filters);
    }, [])

    useEffect(() => {
        fetchCars();
    }, [fetchCars]);

    const getCarsContextValues = useMemo(() => ({
        filters,
        isFetching,
        carsList,
        getCarsList,
        hasNextPage,
        hasPreviousPage,
        fetchCars,
        nextPage,
        prevPage,
        addCarToList,
        updateCarInList,
        getCar,
        deleteCarFromList,
        updateFilters
    }), [filters, isFetching, carsList, getCarsList, hasNextPage, hasPreviousPage, fetchCars, nextPage, prevPage, addCarToList, updateCarInList, getCar, deleteCarFromList, updateFilters]);

    return (
        <CarsContext.Provider value={getCarsContextValues}>
            {children}
        </CarsContext.Provider>
    )  
}

export {CarsContext, CarsProvider}