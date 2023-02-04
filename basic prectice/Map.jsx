import React, { useState } from "react";

function Map() {
  //重複渲染 使用map 將陣列裡面的每一項提取出來
  const [menu, setMenu] = useState([
    { title: "漢堡", price: "30", img: "/" },
    { title: "薯條", price: "40", img: "/" },
    { title: "雞塊", price: "50", img: "/" },
  ]);

  //條件渲染
  const [loading, setLoading] = useState(false);

  const [article, setArticle] = useState("<p>article...</p>")

  // 最外層綁定key
  return (
    <div>
      {loading && <p>loading....</p>}
      {menu.map((item) => (
        <div key={item.title}>
          <p>{item.title}</p>
          <p>{item.price || "時價"}</p> //預設值
          <p>{item.img}</p>
        </div>
      ))}
      <div dangerouslySetInnerHTML={{__html:article}}></div> //資安疑慮
    </div>
  );
}

export default Map;
