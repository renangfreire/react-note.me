import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    button:first-child{
       margin-bottom: 2.857rem;
    }

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.25rem;

        span{
            padding: 0 .5rem;
            color: var(--gray-300);
        }
    }

    input{
        margin-bottom: 1.75rem;
    }
`

export const Bar = styled.div`
    display: inline-block;
    width: 4.75rem;
    height: 1px;
    border-bottom: 1px solid var(--gray-300);
`;