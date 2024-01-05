import { Bar, Container, Content } from "./styles";
import logoBlack from "../../assets/extended-logo-black.svg"
import { Button } from "../Button";
import { Input } from "../Input/Index";

export function Login(){
    return(
        <Container>
            <img src={logoBlack} alt="Note.me" />

            <Content>
                <Button color="red" text="Join with Google" icon="faGoogle"></Button>

                <div>
                    <Bar />
                    <span>or Join anonymously</span>
                    <Bar />
                </div>

                <Input placeholder="Type your secret codename"></Input>

                <Button blocked color="green" text="Join anonymously" icon="log-in">

                </Button>

            </Content>

        </Container>
    );
}