import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 900px;
    margin: 32px auto;
`;

export const Title = styled.h2`
    margin: 8px 0;
    font-size: 24px;
    font-weight: bold;
`;

export const ResultsCounter = styled.span`
    font-size: 14px;
    color: #717171;
    margin-bottom: 8px;
`;

export const NewCarButton = styled.button`
    margin: 24px auto;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    color: #222;
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 24px 0;
    justify-content: center;

    & > button {
        margin: 0 8px;
    }
`;

export const ShowButton = styled.button`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222;
    font-family: 'Montserrat';
    font-weight: bold;
    color: white;
    cursor: pointer;
    transition: 400ms;

    &:hover {
        background-color: #000;
    }

    &:active {
        background-color: #222;
    }
`;