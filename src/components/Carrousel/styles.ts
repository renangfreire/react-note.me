import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin-bottom: 5rem;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1.25rem;
        color: var(--gray-900);

        @media (max-width: 1368px){
            font-size: 2rem;
        }
    }

    p{
        color: var(--gray-400);
        line-height: 2rem;
        font-weight: 400;
        font-size: 1.5rem;


        @media (max-width: 1368px){
            font-size: 1.3rem;
        }
    }

`