import { Moon } from "react-feather";
import { NotePad } from "../../components/NotePad";
import { SearchBar } from "../../components/SearchBar";
import { SideBar } from "../../components/SideBar";
import { Container, GreetingsSection, Header, Main, NotesSection } from "./styles";
import { IconButton } from "../../components/IconButton";

export function Notes(){
    return (
       <Container>
            <SideBar />
            <Main>

                <Header>
                    <SearchBar />
                    <IconButton theme="light">
                        <Moon />
                    </IconButton>
                </Header>

                <GreetingsSection>
                    <p>Hello, <strong>Renan!</strong> 👋🏼</p> 
                    <p>All your notes are here, in one place!</p>
                </GreetingsSection>

                <NotesSection>
                    <NotePad color="cyan"/>
                    <NotePad color="green"/>
                    <NotePad color="lilac" />
                </NotesSection>

            </Main>
       </Container>
    )
}