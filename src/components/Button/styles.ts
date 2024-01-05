import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;

    padding: 1rem 5rem;
    border-radius: .5rem;

    font-size: 1rem;
    font-weight: 500;
    color: var(--white);

    transition: filter 0.2s;

    &:hover{   
        filter: brightness(0.95);
    }

    &.green{
        background-color: var(--semantic-green);
    }
    &.red{
        background-color: var(--semantic-red);
    }

    &.disabled{
            filter: brightness(0.8);
            cursor: not-allowed;
    }
`;
