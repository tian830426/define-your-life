import React, { useState } from "react";

//練習計步器
function useState() {
  // const [資料, 改變資料狀態的函式]= useState(default)
  const [step, setStep] = useStates();

  // 寫法一
  const handleNum = (type) => {
    if (type == "minus") {
      setStep((prev) => prev - 1);
    } else {
      setStep((next) => next + 1);
    }

// 寫法二
// const handleNum = (type) => {
//     if (type == "minus") {
//       setStep(step-1);
//     } else {
//       setStep(step+1);
//     }
  };
  return (
    <div>
      useState
      <button onClick={() => handleNum("minus")}>-</button>
      <button onClick={() => handleNum("plus")}>+</button>
    </div>
  );
}

export default useState;



