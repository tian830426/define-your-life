import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export default function UseSelector() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      UseSelector
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement(0))}>-1</button>
    </div>
  );
}


// 1.  兩個以上的 reducer 不可寫 const store = createStore(AReducer, BReducer) ，要搭配 combineReducers
// 2.  在 React Redux 提供 useSelector 和 useDispatch 來達到叫出對應 state 和執行 dispatch 的功能
// 3.  Redux DevTools ：使用時記得把 src / index.js 要改寫為：
//         const myStore = createStore( allReducers,
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__() );