import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarsContext } from "../../context/hooks";
import { createCar, deleteCar, updateCar } from "../../functions/api";
import LoadingButton from "../LoadingButton/LoadingButton";
import { CarFormProps } from "./models";
import { Container, ErrorMessage, InputBox, InputLabel, TextInput } from "./style";

const CarForm = ({id}: CarFormProps) => {

    const {addCarToList, updateCarInList, getCar, deleteCarFromList} = useCarsContext();

    const navigate = useNavigate();

    const [fetchingItem, setFetchingItem] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [error, setError] = useState({status: false, message: ''});

    useEffect(() => {
        if (id) {
            setFetchingItem(true);
            const car = getCar(id);
            if (car) {
                setTitle(car.title)
                setBrand(car.brand || '')
                setPrice(car.price || '')
                setAge(car?.age?.toString() || '')
                setFetchingItem(false);
            }
        }
    }, [getCar, id])

    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = useCallback(async () => {

        if (error.status) {
            setError({status: false, message: ''})
        }

        setLoading(true);

        if (!title.length) {
            setError({status: true, message: "Nome do carro não pode estar vazio."})
            setLoading(false);
            return
        }

        if (!id) {
            const {error: functionError, code, data} = await createCar({title, brand, price, age});

            if (functionError || !data) {
                //todo trigger snackbar
                console.log("error", code)
                setLoading(false);
                return
            }

            addCarToList(data);
        } else {
            const {error: functionError, code, data} = await updateCar({id, title, brand, price, age})
            
            if (functionError || !data) {
                //todo trigger snackbar
                console.log("error", code)
                setLoading(false);
                return
            }

            updateCarInList(data)
        }
        
        navigate("/");
        //todo trigger snackbar
        setLoading(false);

    }, [addCarToList, age, brand, error.status, id, navigate, price, title, updateCarInList]);

    const handleDelete = useCallback(async () => {
        setIsDeleteLoading(true)

        if (!id) {
            setIsDeleteLoading(false);
            return
        }

        const {error, code, id: responseId} = await deleteCar(id);

        if (error || !responseId) {
            //todo trigger snackbar
            console.log("error", code)
            setLoading(false);
            return
        }

        deleteCarFromList(id);
        navigate("/");
        //todo trigger snackbar
        setLoading(false);

    }, [deleteCarFromList, id, navigate]);

    if (fetchingItem) {
        return <div>loading</div>
    }

    return (
        <Container>
            <InputBox>
                <InputLabel>Nome do Carro</InputLabel>
                <TextInput 
                    id="title"
                    placeholder="Qual o nome deseja dar para esse carro?"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </InputBox>

            <InputBox>
                <InputLabel>Marca do Carro</InputLabel>
                <TextInput 
                    id="brand"
                    placeholder="Qual a marca deste carro?"
                    type="text"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                />
            </InputBox>

            <InputBox>
                <InputLabel>Preço do Carro</InputLabel>
                <TextInput 
                    id="brand"
                    placeholder="Qual o preço deste carro?"
                    type="text"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </InputBox>

            <InputBox>
                <InputLabel>Ano do Carro</InputLabel>
                <TextInput 
                    id="brand"
                    placeholder="Qual o ano deste carro?"
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
            </InputBox>

            {id && <LoadingButton isDelete isLoading={isDeleteLoading} onClick={handleDelete} text="Excluir" />}
            <LoadingButton isLoading={loading} onClick={handleSubmit} text={id ? "Editar" : "Adicionar"} />
            
            {
                error.status && <div><ErrorMessage>ERRO - {error.message}</ErrorMessage></div>
            }
        </Container>
    )
}

export default CarForm;