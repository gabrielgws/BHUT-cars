import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`;

export const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
`;

export const FiltersBox = styled.div`
    margin: 16px 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
`;

export const FilterField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`;

export const FilterTitle = styled.span`
    font-weight: bold;
    margin: 16px 0;
    font-size: 15px;
`;

export const FilterSelectField = styled.select`
    height: 40px;
    width: 90%;
    font-family: 'Montserrat';
`;

export const Button = styled.button`
    margin: 8px 0;
    background-color: #222;
    border-radius: 4px;
    height: 40px;
    width: 200px;
    color: white;
    font-size: 'Montserrat';
    font-weight: 700;
    cursor: pointer;
`;

export const BackButton = styled.button`
    background-color: transparent;
    border: none;
    margin: 8px 0;
    cursor: pointer;
`;