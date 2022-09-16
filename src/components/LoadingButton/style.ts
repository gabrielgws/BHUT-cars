import styled from "styled-components";

interface ButtonProps {
    isDelete: boolean;
}

export const Button = styled.button`
    background-color: transparent;
    height: 40px;
    width: 200px;
    border-radius: 4px;
    margin: 16px 12px;
    font-weight: bold;
    background-color: ${(props: ButtonProps) => props.isDelete ? 'darkred' : '#222'};
    color: #FFF;
    cursor: pointer;
`;