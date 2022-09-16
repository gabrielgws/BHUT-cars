import { Container, LogoBox, LogoWord, Slogan } from "./style";
import {GiHomeGarage} from "react-icons/gi"

const Header = () => {
    return (
        <Container>
            <LogoBox>
                <GiHomeGarage style={{fontSize: 40}} />
                <LogoWord isFirstWord>Minha</LogoWord>
                <LogoWord>Garagem</LogoWord>
            </LogoBox>

            <Slogan>A melhor garagem virtual da internet</Slogan>
        </Container>
    )
}

export default Header;