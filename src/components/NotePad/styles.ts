import styled from "styled-components";

function getColor(color: string){
    const beginningCommon = "--opaque"

    switch(color){
        case "yellow": {
            return `${beginningCommon}-light-yellow`
        }
        case "orange": {
            return `${beginningCommon}-red-orange`
        }
        case "lilac": {
            return `${beginningCommon}-lilac`
        }
        case "green": {
            return `${beginningCommon}-green-cyan`
        }
        case "cyan": {
            return `${beginningCommon}-light-cyan`
        }
    }
}

export const Container = styled.div<{$color: "yellow" | "orange" | "lilac" | "green" | "cyan"}>`

    width: 16.5rem;
    height: 15rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2rem;

    background-color: ${props => `var(${getColor(props.$color)})` };
    border-radius: .5rem;

    overflow: hidden;

    span{
        font-size: 0.875rem;
        color: var(--midnight)
    }

`

export const TextArea = styled.textarea`
        height: 100%;
        resize: none;
        background-color: transparent;
        outline: none;

        font-size: 1.25rem;
        color: var(--midnight);
        font-weight: 500;    
`