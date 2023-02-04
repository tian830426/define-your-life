// 1. 特性：
//     *  會回傳一個含有 current 的物件
//     *  可以操作 DOM
//     *  值被更新時，不會觸發元件重新渲染
// 2.  能用來：
//     *  操作 DOM
//     *  阻止無限迴圈
//     *  取得過去的值


import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  //初始化
  //狀態一
  const inputRef = useRef(null);
  inputRef.current.focus();

  //狀態二 植被更新時不會觸發重新渲染
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  //狀態三
  const [input, setInput] = useState("");
  const prevInput = useRef("");
  useEffect(() => {
    prevInput.current = input;
  }, [input]);

  return (
    <div>
      //設定 ＤＯＭ
      <div>
        <label htmlFor="account" ref={inputRef}>
          帳號
        </label>
        <input type="text" id="account" />
      </div>
      <div>
        <label htmlFor="password">密碼</label>
        <input type="text" id="password" />
      </div>
      // 關店無限迴圈
      <div>
        <p>{timer}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </div>
      // 取得剛剛輸入的值
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <p>{prevInput.current}</p>
      </div>
    </div>
  );
}

export default UseRef;
