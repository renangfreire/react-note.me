import logoBlack from "../../assets/extended-logo-black.svg"
import { ProgressBar } from "../../components/ProgressBar"
import { Container, Content } from "./style"

export function Loading(){
    return(
        <Container>
            <Content>
                <img src={logoBlack} alt="Note.me" />
                <ProgressBar />
            </Content>
        </Container>
    )
}