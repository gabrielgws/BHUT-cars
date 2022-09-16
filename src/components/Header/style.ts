import styled from "styled-components";
import { LogoWordProps } from "./models";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
`;

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoWord = styled.span`
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: ${(props: LogoWordProps) => props.isFirstWord ? '8px' : 0};
    color: ${(props: LogoWordProps) => props.isFirstWord ? "#222" : '#f47721'};
`;

export const Slogan = styled.p`
    margin: 8px 0;
    font-size: 18px;
    
`;