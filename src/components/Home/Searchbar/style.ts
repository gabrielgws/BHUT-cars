import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    max-width: 900px;
    margin: 8px auto;

    & > svg {
        margin-left: 12px;
        font-size: 30px;
        cursor: pointer;
        color: #222;

        &:hover {
            color: "#000"
        }
    }
`;

export const Searchbar = styled.input`
    height: 50px;
    font-family: 'Montserrat';
    width: 100%;
    padding: 0 24px;
    transition: 400ms;

    &:focus {
        outline: none;
        border: 2px solid #f47721;
    }
`;

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;

    & > svg {
        font-size: 30px;
    }
`;

