// react 相關套件
import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

// pages
import AnimationPage from "./pages/HomePage/AnimationPage";
import HomePage from "./pages/HomePage/HomePage";
import EditPage from "./pages/AlbumEditPage/EditPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import LoginPage from "./pages/AuthPage/LoginPage";
// import MemberPage from "./pages/AlbumLibraryPage/MemberPage";
// import ProfilePage from "./pages/AlbumLibraryPage/PlayAlbumPage";
import AlbumLibraryPage from "./pages/AlbumLibraryPage/AlbumLibraryPage";
import SnapShowPage from "./pages/AlbumLibraryPage/SnapShowPage";
import NotFound from "./pages/NotFound";

import UserAuthProvider from "./pages/AuthPage/UserAuthProvider";

const App = () => {
  return (
    <UserAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route index element={<AnimationPage />} />
            <Route path="home" element={<HomePage />} />
          </Route>
          <Route path="/home">
            <Route path="albumlibrary/:id" element={<SnapShowPage />} />
            <Route path="albumlibrary" element={<AlbumLibraryPage />}></Route>
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="edit" element={<EditPage />} />
          </Route>
          {/* <Route path="/home/member">
            <Route path="profile" element={<ProfilePage />} />
          </Route> */}
          <Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthProvider>
  );
};

export default App;

//Switch 會報錯
