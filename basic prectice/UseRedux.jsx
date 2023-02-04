// 1.  官網： https://react-redux.js.org/introducti...
// 2.  安裝： npm install redux react-redux
// 3.  基本寫法介紹
// 4.  架構：
//     *  store ： 儲存全域 State
//     *  action ： 改變 State 的行為
//     *  reducer ： 負責去確認現在要用哪個 action ，進而執行並且改變 State
//     *  dispatch ： 傳送 action 給 reducer
// 5.  props 的限制：
//     *  同層無法傳遞
//     *  太多層時會很複雜

import React from "react";
import { createStore } from "redux";

//建立 action
const increment = () => {
  return {
    type: "INCREMENT", //action name
  };
};

const decrement = () => {
  return {
    type: "DECREMENT", //action name
  };
};
//建立 reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// 建立 store
let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());

function UseRedux() {
  return <div>UseRedux</div>;
}

export default UseRedux;
