import { useCallback } from "react";
import { useHelpersContext } from "../../context/hooks";
import { Container, ModalWindow } from "./style";
import FilterModal from "./variants/Filter/FilterModal";

const Modal = () => {
    const {isModalOpen} = useHelpersContext();

    const getModalContent = useCallback(() => {
        switch(isModalOpen.variant) {
            case 'filter':
                return <FilterModal />
            case 'delete':
                return <div>delete modal</div>
        }
    }, [isModalOpen?.variant])

    if (!isModalOpen.isOpen) {
        return <></>
    }

    return (
        <Container>
            <ModalWindow>
                {getModalContent()}
            </ModalWindow>
        </Container>
    )
}

export default Modal;