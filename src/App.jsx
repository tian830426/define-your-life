import React from "react";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage"

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="edit" element={<EditPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

export default App;