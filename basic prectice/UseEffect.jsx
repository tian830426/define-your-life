import React, { useEffect } from "react";

function UseEffect() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch("http:..localhost:800/menu")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMenu(data);
      });
  }, []);
  return (
    <div>
      UseEffect
      <h2>菜單</h2>
      <div className="menu-container">
        {menu &&
          menu.map((item) => (
            <div key={item.title}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.pic}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UseEffect;


//客製化 hook 


