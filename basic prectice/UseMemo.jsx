// 避免效能不好的問題
// 1.  useMemo 可監聽值，當值改變才執行某些行為
// 2.  基本寫法介紹
// 3.  Functional Component 重渲染時會從頭跑一遍，生成新物件，因為 JS 的 Referential Equality 特性，導致每次物件都不會相等。使用 useEffect 的話會因判斷成不一樣的東西（其實一樣），多跑好幾次不需要的行為
// 4.  注意：
//     *  useMemo 代表的是將東西用 cache 存起來
//     *  因為 cache 並不是非常穩定，所以不該把它用在絕不能重跑程式的場合
// 5.  和 useEffect 的差異：
//     *  觸發時間： useEffect 只會在第一次渲染後被呼叫， useMemo 則會在渲染中、元件 return state 前就觸發
//     *  使用場合： 如果是要跟 State 值有關的、或是操控 DOM，應使用 useEffect ； 如果是優化速度，則應使用 useMemo

import React, { useMemo, useState } from "react";

function UseMemo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  
  const incrementA = () => {
    setA(a + 1);
  };
  const incrementB = () => {
    setB(b - 1);
  };
  const isEven = useMemo(() => {
    return a % 2 === 0;
  }, [a]);



  return (
    <div>
      UseMemo
      <button onClick={() => incrementA()}>{a}</button>
      <button onClick={() => incrementB()}>{b}</button>
      <p>a is {isEven ? "even" : "odd"}</p>
    </div>
  );
}

export default UseMemo;
