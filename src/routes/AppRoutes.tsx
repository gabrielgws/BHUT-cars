import { Route, Routes } from "react-router-dom";
import EditCarPage from "../pages/EditCar/EditCar";
import HomePage from "../pages/Home/Home";
import NewCarPage from "../pages/NewCar/NewCar";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/novo-carro" element={<NewCarPage />} />
            <Route path="/carro/:id" element={<EditCarPage />} />
        </Routes>
    )
}

export default AppRoutes;