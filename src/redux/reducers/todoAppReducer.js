import { types } from "../types/types";

const initialTodos = [
  { id: 1, title: "Todo#1" },
  { id: 2, title: "Todo#2" },
];

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
