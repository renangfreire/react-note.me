import { Search } from "react-feather";
import { Container, InputText } from "./styles";

export function SearchBar(){
    return (
        <Container >
            {/* Rapaz não imaginei que acessaria a variavel CSS aqui */}
            <Search size={18} color="var(--gray-400)"/>
            <InputText placeholder="Search Notes"/>
        </Container>
    );
}