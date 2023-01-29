// react 相關套件
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import AnimationPage from "./pages/AnimationPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import NavbarLayout from "./components/NavbarLayout";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={<AnimationPage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="/home">
          {/* <Route path="member" element={<MemberPage/>} /> */}
          <Route path="signup" element={<SignUpPage />} />
          <Route path="edit" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
