import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./styles";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { LogIn } from "react-feather"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ButtonProps{
    icon?: "faGoogle" | "log-in",
    text: string,
    color: "red" | "green",
    blocked?: boolean,
}

export function Button({icon, text, color, blocked} : ButtonProps){

    function renderIcon(icon : string){
        switch(icon){
            case "faGoogle": {
                return (
                    <FontAwesomeIcon icon={faGoogle} width={24}/>
                )
            }
            case "log-in": {
                return (
                    <LogIn />
                )
            }
        }
        
    }

    
    return(
        <StyledButton className={`${color} ${blocked ? "disabled" : ""}`}>
            {icon ? renderIcon(icon) : ""}
            {text}
        </StyledButton>
    )
}