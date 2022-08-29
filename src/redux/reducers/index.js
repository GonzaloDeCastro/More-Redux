import counterReducer from "./counterReducer";
import loggedReducer from "./isLoggedReducer";
import todoReducer from "./todoAppReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todoReducer: todoReducer,
});

export default allReducers;
