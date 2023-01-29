import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./components/GlobalStyle";

// import "./style.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
