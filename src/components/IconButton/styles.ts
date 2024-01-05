import styled from "styled-components";

export const Container = styled.button<{$theme: "light" | "dark"}>`
    background-color: transparent;
    display: flex;
    align-items: center;

    svg {
        transition: filter 0.2s;
        stroke: ${props => {
            if(props.$theme === "light"){
                return "var(--midnight)"
            }
            return "var(--white)"
        }};
    }

    &.active{
        &::before{
        content: "";
        width: 4px;
        height: 3.5rem;
        background-color: var(--midnight);
        border-radius: 0 5px 5px 0;
        display: inline-block;
        position: absolute;
        left: 0;
    }
    }

    &:hover{
        svg{
            filter: brightness(1.5);
        }
    }
`