import React from "react";
import ReactDOM from "react-dom";
import allReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { RouterProvider } from 'react-router-dom';
// import ReactDom from "react-dom/client"
import GlobalStyle from "./components/GlobalStyle";
import App from "./App";

// 建立 store
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {" "}
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        {/* <RouterProvider router={router} /> */}
        <App />
      </Provider>
    </React.StrictMode>
  </>
);
