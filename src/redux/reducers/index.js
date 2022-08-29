import counterReducer from "./counterReducer";
import loggedReducer from "./isLoggedReducer";
import todoReducer from "./todoAppReducer";
import { combineReducers } from "redux";
import productReducer from "./productReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todoReducer: todoReducer,
  productReducer: productReducer,
});

export default allReducers;
