import { InputText } from "./styles";

interface InputProps{
    placeholder: string;
}

export function Input({placeholder} : InputProps){
    return (
        <InputText type="text" placeholder={placeholder}>
            
        </InputText>
    );
}