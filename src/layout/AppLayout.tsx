import { Helmet } from "react-helmet"
import { AppLayoutPropsType } from "./model"
import { Container } from "./style"

const AppLayout = ({children}: AppLayoutPropsType) => {
    return (
        <Container>
            <Helmet>
                <title>Minha Garagem | A sua garagem virtual.</title>
            </Helmet>
            {children}
        </Container>
    )
}

export default AppLayout