import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 24px auto;
`;

export const InputBox = styled.div`
    margin: 16px 0;
`;

export const InputLabel = styled.span`
    font-size: 15px;
    font-weight: 700;
`;

export const TextInput = styled.input`
    height: 50px;
    font-family: 'Montserrat';
    width: 100%;
    padding: 0 8px;
    transition: 400ms;
    margin-top: 5px;

    &:focus {
        outline: none;
        border: 2px solid #f47721;
    }
    
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 15px;
    
`;