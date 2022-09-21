import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --c11: #111;
    --b6: #27190B;
    --b5: #88643E;
    --b4: #BF9B74;
    --b3: #DFC1A2;
    --b2: #F2DDC8;
    --b1: #FDEEDE;
    --red: #EB5757;
    --white: #fff;
  }
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
    body{
        background-color: var(--c11);
        color: var(--b1);
    }

    body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    ul,ol{
        list-style: none;
    }
`;
