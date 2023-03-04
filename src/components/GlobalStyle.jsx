import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
    outline: none;
    text-decoration: none;
    /* font-family:"Montserrat" ,sans-serif;  */

    /* font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;  */
    
    /* font-family: "Courier New", Courier, monospace; */
    /* font-family: "Signika", sans-serif;  */
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

html,body {
    width: 100%;
    /* height: 100%;  */
    max-width: 100vw;
    max-height: 100vh; 
  }

#root {
   width: 100%;
   height: 100%;
}

`;

export default GlobalStyle;
