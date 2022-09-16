import { createContext, useCallback, useMemo, useState } from "react";
import { HelpersContextType, ModalType, ProviderProps } from "./models";

const HelpersContext = createContext({} as HelpersContextType);

const HelpersProvider = ({children}: ProviderProps) => {

    const [isModalOpen, setIsModalOpen] = useState<ModalType>({isOpen: false, variant: ''});

    const openModal = useCallback((variant: 'filter' | 'delete') => {
        document.body.style.overflow = 'hidden';
        setIsModalOpen({isOpen: true, variant});
    }, []);

    const closeModal = useCallback(() => {
        document.body.style.overflow = '';
        setIsModalOpen({isOpen: false, variant: ''});
    }, []);

    const getHelpersContextValues = useMemo(() => ({
        isModalOpen,
        openModal,
        closeModal
    }), [closeModal, isModalOpen, openModal]);

    return (
        <HelpersContext.Provider value={getHelpersContextValues}>
            {children}
        </HelpersContext.Provider>
    )
}

export {HelpersContext, HelpersProvider};