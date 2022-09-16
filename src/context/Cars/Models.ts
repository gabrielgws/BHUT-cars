import { ReactNode } from 'react';

export interface CarType {
    _id: string;
    title: string;
    brand?: string;
    price?: string;
    age: number;
}

export interface ProviderProps {
    children: ReactNode;
}

export interface FilterType {
    text?: string;
    price?: string;
    age?: string;
}

export interface CarsContextType {
    filters: FilterType;
    isFetching: boolean;
    carsList: CarType[];
    getCarsList: () => CarType[];
    fetchCars: () => void;
    hasNextPage: () => boolean;
    hasPreviousPage: () => boolean;
    nextPage: () => void;
    prevPage: () => void;
    addCarToList: (car: CarType) => void;
    getCar: (id: string) => CarType | undefined;
    updateCarInList: (car: CarType) => void;
    deleteCarFromList: (id: string) => void;
    updateFilters: (filters: FilterType) => void;
}