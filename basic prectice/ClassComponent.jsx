// rce class component 快捷鍵

// 包一個物件
import React, { Component } from "react";

export class ClassComponent extends Component {
  state = {
    num: 0,
    data: "",
  };

  handleNum(type) {
    if (type === "minus") {
      this.setState({
        ...this.state,
        num: this.state.num - 1,
      });
    } else {
      this.setState({
        ...this.state,
        num: this.state.num + 1,
      });
    }
  }
  render() {
    return (
      <div>
        ClassComponent
        <button onClick={() => handleNum("minus")}>-</button>
        <button onClick={() => handleNum("plus")}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
