// react 相關套件
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import AnimationPage from "./pages/HomePage/AnimationPage";
import HomePage from "./pages/HomePage/HomePage";
import EditPage from "./pages/AlbumEditPage/EditPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import MemberPage from "./pages/MemberPage/MemberPage";
import ProfilePage from "./pages/MemberPage/ProfilePage";
import LibraryPage from "./pages/MemberPage/LibraryPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={<AnimationPage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="/home">
          <Route path="member" element={<MemberPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="edit" element={<EditPage />} />
        </Route>
        <Route path="/home/member">
          <Route path="profile" element={<ProfilePage />} />
          <Route path="library" element={<LibraryPage />} />
        </Route>
        <Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//Switch 會報錯
