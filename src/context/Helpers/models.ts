import { ReactNode } from "react";

export interface ProviderProps {
    children: ReactNode;
}


export interface ModalType {
    isOpen: boolean;
    variant: '' | 'filter' | 'delete'
}

export interface HelpersContextType {
    isModalOpen: ModalType;
    openModal: (variant: 'filter' | 'delete') => void;
    closeModal: () => void;
}