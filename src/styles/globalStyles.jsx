import { createGlobalStyle } from "styled-components";
import "assets/fonts/font.css";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "proximanova";
        background-color: white;

        ul, li {
            margin:0;
            padding: 0;
            text-indent: 0;
            list-style-type: 0;  
        }
    
    }

`;

export default GlobalStyle;
