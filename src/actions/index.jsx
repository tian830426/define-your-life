//建立 action
export const increment = () => {
  return {
    type: "INCREMENT",  //action name
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT", //action name
  };
};
