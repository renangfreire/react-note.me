import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root {
            --rose: #FDBAA3;
            --white: #ffff;
            --midnight: #3C3D43;
            --cream-white: #FFFDFA;

            --semantic-red: #F7685C;
            --semantic-green: #30C58D;

            --opaque-light-yellow: rgba(251, 235, 149, 0.4);
            --opaque-red-orange: rgba(253, 186, 163, 0.4);
            --opaque-lilac: rgba(182, 165, 203, 0.4) ;
            --opaque-green-cyan: rgba(151, 210, 188, 0.6);
            --opaque-light-cyan: rgba(174, 223, 232, 0.6);

            --gray-900: #000000;
            --gray-800: #343539;
            --gray-600: #4D4D4D;
            --gray-400: #808080;
            --gray-300: #8C8A97;
        }

        * {
            box-sizing: border-box;
            padding: 0;
            border: 0;
            margin: 0;
        }

        html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }   

        body {
            -webkit-font-smoothing: antialiased;
            background-color: var(--cream-white);
        }
        
        body, input, textarea, button{
            font-family: "Ubuntu", sans-serif;
            font-weight: 400;
        }

        h1, h2, h3, h4, h5, h6, strong{
            font-weight: 700;
        }

        button{
            cursor: pointer;
        }

`