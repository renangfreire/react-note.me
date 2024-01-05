import { Container, TextArea } from "./styles";

interface NotePadProps {
    color: "yellow" | "orange" | "lilac" | "green" | "cyan"
}

export function NotePad({color}: NotePadProps){

    return (
        <Container draggable $color={color}>
                <TextArea spellCheck={false} >This is how a Note on Note.me looks like! Very Simple, clean and aesthetic! 😍</TextArea>
                <span>Feb, 10 2022</span>
        </Container>
    );
} 