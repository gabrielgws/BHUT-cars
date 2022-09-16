import axios from "axios";
import { CarType } from "../context/Cars/Models";

interface FetchFunctionResponse {
    error: boolean;
    code: string;
    data: CarType[] | null;
}

interface CreateFunctionResponse {
    error: boolean;
    code: string;
    data: CarType | null;
}

interface CarParams {
    id?: string;
    title: string;
    brand?: string;
    price?: string;
    age?: string;
}

interface UpdateFunctionReturn {
    error: boolean;
    code: string;
    data: CarType | null;
}  

interface DeleteFunctionReturn {
    error: boolean;
    code: string;
    id: string;
}

export const fetchCarsFromApi = async (): Promise<FetchFunctionResponse> => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}cars`);
        if (!data) {
            return {error: true, code: 'NO_DATA', data: null}
        }
        return {error: false, code: 'SUCCESS', data}

    } catch (e) {
        return {error: true, code: 'FETCH_ERROR', data: null}
    }

}

export const createCar = async ({title, brand, price, age}: CarParams): Promise<CreateFunctionResponse> => {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_API_BASE_URL}cars`, {
            title,
            brand,
            price,
            age: age ? parseInt(age) : 0
        });
        return {error: false, code: 'SUCCESS', data}
    } catch (e) {
        return {error: true, code: 'FETCH_ERROR', data: null}
    }
}

export const updateCar = async ({id, title, brand, price, age}: CarParams): Promise<UpdateFunctionReturn> => {
    try {
        const {data} = await axios.put(`${process.env.REACT_APP_API_BASE_URL}cars/${id}`, {
            title,
            brand,
            price,
            age
        });
        return {error: false, code: 'SUCCESS', data}
    } catch (e) {
        return {error: true, code: 'UPDATE_ERROR', data: null}
    }
}

export const deleteCar = async (id: string): Promise<DeleteFunctionReturn> => {
    try {
        const {data} = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}cars/${id}`);
        console.log(data)
        return {error: false, code: 'SUCCESS', id}
    } catch (e) {
        return {error: true, code: 'DELETE_ERROR', id}
    }
}