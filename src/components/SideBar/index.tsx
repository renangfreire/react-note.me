import { Container, Content, Footer, Header  } from "./styles";
import logoBlack from "../../assets/logo-black.svg"
import { Home, LogOut, Plus } from "react-feather";
import { IconButton } from "../IconButton";

export function SideBar(){
    return(
        <Container>
            <Header>
                <img src={logoBlack} alt="Note.me" />
            </Header>
            
            <Content>
                <IconButton className="active" theme="light"><Home size={32} /></IconButton>
                <IconButton theme="light"><Plus size={32} /></IconButton>
            </Content> 

            <Footer>
                <IconButton theme="light"><LogOut size={32}/></IconButton>
            </Footer>
        </Container>
    )
}