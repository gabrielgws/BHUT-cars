import styled from "styled-components";


export const SkeletonContainer = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 16px;
    border-radius: 4px;
    margin: 8px;
    animation: skeleton infinite 1.3s;
`;

export const Container = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 16px;
    border: 2px solid #222;
    border-radius: 4px;
    margin: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 400ms;

    &:hover {
        border: 2px solid orange;
        box-shadow: 0 1px 1px 1px #ccc;
        transform: scale(1.01);
    }
`;

export const CarName = styled.span`
    font-weight: 500;
`;