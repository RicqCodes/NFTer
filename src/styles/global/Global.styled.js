import { createGlobalStyle } from "styled-components";

import { color, device } from "../reuseable/utils.styled";

export const GlobalStyles = createGlobalStyle`
    /* Resets */
    html {
        scroll-behavior: smooth;
       
    }

    * {
        position: relative;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        width: 100%;
        min-height: 100vh;
    } 
    

    ul, ol {
        list-style-type: none;
    }

    a {
        color: initial;
        text-decoration: none;

        &:hover, 
        &:visited, 
        &:focus {
            color: initial;
            text-decoration: none;
        }
    }

    label {

    }

    input {
        border: none;
        color: inherit;
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
    }

    /* Typograhy */

    p {
        font-size: 16px;
        line-height:32px;

        ${() => device.up("sm")} {
            font-size: 18px;
        }
    }

    span {
        font-size: 14px;

        ${() => device.up("sm")} {
            font-size: 16px;
        }
    }

    small {
        font-size: 12px;

        ${() => device.up("sm")} {
            font-size: 14px;
        }
    }

    h1 {
        font-size: 38px;
        font-weight: 500;
    }

    h2 {
        font-size: 33px;
        font-weight: 400;
    }

    h3 {
        font-size: 28px;
        font-weight: 400;
    }

    h4 {
        font-size: 23px;
        font-weight: 400;
    }

    h5 {
        font-size: 18px;
        font-weight: 400;
    }
`;
