import isLoggedReducer from "./isLogged";
import counterReducer from "./counter";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLoggedReducer,
  counterReducer,
});

export default allReducers;

