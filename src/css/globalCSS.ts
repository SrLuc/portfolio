import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

    body{
        font-family: "Roboto", sans-serif;
     width: 100%;
     background-color: #F8F8F8;
     height: 100vh;

     transition: all 0.3s ease;
    }
`;

export default GlobalStyle;
