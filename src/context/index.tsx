import { ReactNode } from "react";
import { CarsProvider } from "./Cars/Context";
import { HelpersProvider } from "./Helpers";

interface ProviderProps {
    children: ReactNode;
}

const GlobalProvider = ({children}: ProviderProps) => {
    return (
        <HelpersProvider>
            <CarsProvider>
                {children}
            </CarsProvider>
        </HelpersProvider>
    )
}

export default GlobalProvider;