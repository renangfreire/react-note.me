// import { Button } from "../../components/Button";
// import { Input } from "../../components/Input/Index";
import { Carrousel } from "../../components/Carrousel";
import { Login } from "../../components/Login";
import { Container } from "./styles";

export function Home(){
    return (
        <Container>
            <Carrousel />
            <Login />
        </Container>
    );
}