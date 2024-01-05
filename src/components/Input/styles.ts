import styled from "styled-components";

export const InputText = styled.input`
        width: 20rem;
        height: 3.125rem;

        padding: 1rem;

        border: 1px solid var(--gray-300);
        color: var(--gray-300);
        outline-color: var(--gray-400);
        border-radius: .5rem;

        &::placeholder{
            color: var(--gray-300);
        }

        &:focus{
            color: var(--gray-400);
        }



`