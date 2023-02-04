// props
// 單向傳遞 父元件 => 子元件

import React, { useState } from "react";
import PropsChildren from "./PropsChildren";

function PropsParent() {
  const [parentDate, setParentDate] = useState("父元件創立的資料");

  // 狀態四 將子元件資料傳到父元件 傳送參數
  const change3 = (parameter)=>{
    setParentDate(parameter)
  }

  return (
    <div>
      PropsParent
      <p>父元件：{parentDate}</p>
      {/* 狀態一 將父元件資料傳給子元件 */}
      {/*前內後外:子元件的名稱 = {父元件傳遞的state名稱} */}
      <p>父元件：{parentDate}</p>
      <PropsChildren data={parentDate} />
      {/* 狀態二 將父元件資料傳給子元件接收，點擊後子元件狀態改變 */}
      <p>父元件：{parentDate}</p>
      <PropsChildren data={parentDate} />
      {/* 狀態三 將父元件資料傳給子元件， 點擊後父元件及子元件同時改變 */}
      <p>父元件：{parentDate}</p>
      <PropsChildren data={parentDate} setParentDate={setParentDate} />

      {/* 狀態四  */}
      <p>父元件：{parentDate}</p>
      <PropsChildren data={parentDate} change={change3} />

    </div>
  );
}

export default PropsParent;
