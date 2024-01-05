import { Container } from "./styles";

type IconButtonProps = {
    theme: "light" | "dark",
    children: React.ReactNode,
    className?: string
}

export function IconButton({ theme, children, className}: IconButtonProps){
    return(
        <Container className={className} $theme={theme}>
            {children}
        </Container>
    )
}