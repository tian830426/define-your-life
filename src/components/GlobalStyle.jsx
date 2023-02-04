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
    font-family:"Montserrat" ,sans-serif;
    // font-family: "Courier New", Courier, monospace;
    // font-family: "Signika", sans-serif; 
}

html,body {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh; 
  }

#root {
   width: 100%;
   height: 100%;
}

`;

export default GlobalStyle;