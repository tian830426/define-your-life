import React, { useState } from "react";

function PropsChildren(props) {
  console.log(props);

  // 狀態二 用useState 接收父元件傳來的狀態並再做狀態的改變
  const [childrenDate, setChildrenDate] = useState(props.data);
  const change = () => {
    setChildrenDate("子元件改變的資料");
  };
  //狀態三
  const change2 = () => {
    props.setParentDate("子元件改變的資料");
  };

  // object
  return (
    <div>
      PropsChildren
      {/* 狀態一 - 子元件接父元件傳來的資料 "父元件創立的資料" */}
      <p>{props.data}</p>
      {/* 狀態二 - 子元件接父元件傳來的資料 "父元件創立的資料" -> 點擊後改變狀態變成 "子元件改變的資料" 但 parentDate 不會被改變 */}
      <p>{childrenDate}</p>
      <button onClick={change}>click</button>
      {/* 狀態三 - 點擊按鈕讓父元件和子元件的狀態同時被改變 -> 都是 "子元件改變的資料" */}
      <p>{props.data}</p>
      <button onClick={change2}>click</button>
      {/* 狀態四 - 將子元件內參數傳送給父元件  */}
      <p>{props.data}</p>
      <button onClick={() => props.change3("子元件傳送的參數")}>click</button>
    </div>
  );
}

export default PropsChildren;


// 