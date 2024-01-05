import styled from "styled-components";

export const Container = styled.div`
    width: 31.25rem;
    height: .625rem;
    border-radius: .5rem;
    display: inline-block;
    background-color: var(--opaque-red-orange);
`

export const Progress = styled.div<{ $width: number; }>`
    width: ${props => props.$width}%; // Controlado via %;

    height: .625rem;
    border-radius: .5rem;
    background-color: var(--midnight);
`