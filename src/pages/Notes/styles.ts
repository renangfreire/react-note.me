import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const Main = styled.main`
    width: 100%;
    padding: 2.5rem 7rem;
    padding-right: 11rem;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.125rem;
`

export const GreetingsSection = styled.section`
    font-size: 2rem;
    color: var(--gray-900);

    p + p{
        padding-top: 1rem;
        font-size: 1.25rem;
        color: var(--gray-600); 
    }

    margin-bottom: 4rem;
`
export const NotesSection = styled.section`
    display: flex;
    gap: 2.25rem;
`