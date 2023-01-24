// react 相關套件
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import AnimationPage from "./pages/AnimationPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import NavbarLayout from "./components/NavbarLayout";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

// components

// css
// import "./style.scss";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Route index element={<AnimationPage />}></Route>
    //       <Route
    //         path="home"
    //         element={
    //           <NavbarLayout>
    //             <HomePage />
    //           </NavbarLayout>
    //         }
    //       />
    //       <Route
    //         path="edit"
    //         element={
    //           <NavbarLayout>
    //             <EditPage />
    //           </NavbarLayout>
    //         }
    //       ></Route>
    //       <Route path="signup" element={<SignUpPage />}></Route>
    //       {/* <Route path="edit" element={<EditPage />}></Route> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AnimationPage />}></Route>
          <Route path="home" element={<HomePage />} />
          <Route path="edit" element={<EditPage />}></Route>
        </Route>
        <Route path="/home">
          <Route path="signup" element={<SignUpPage />}></Route>
          {/* <Route path="edit" element={<EditPage />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
