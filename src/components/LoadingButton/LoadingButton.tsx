import { LoadingButtonProps } from "./models";
import { Button } from "./style";

const LoadingButton = ({isLoading, isDelete, text, onClick}: LoadingButtonProps) => {

    return (
        <Button isDelete={isDelete || false} onClick={onClick}>
            {
                isLoading ?
                    <div className="lds-dual-ring"></div>
                :
                text
            }
        </Button>
    )
}

export default LoadingButton;