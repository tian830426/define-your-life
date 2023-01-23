import React from "react";
import { Link } from "react-router-dom";
import NavbarLayout from "../components/NavbarLayout";

const HomePage = () => {
  return (
    <div>
      <div>React 練習專案</div>
      <div >歡迎光臨我的頁面</div>
      <Link to="/">
        點此開始
      </Link>
    </div>
  );
};

export default HomePage;
