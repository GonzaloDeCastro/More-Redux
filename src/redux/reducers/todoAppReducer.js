import { types } from "../types/types";

const initialTodos = [
  { id: 1, title: "Todo#1" },
  { id: 2, title: "Todo#2" },
];

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case types.delete:
      return state.filter((todo) => todo.id !== action.payload);
    case types.add:
      return [...state, action.payload];
    case types.update: {
      const todoEdit = action.payload;
      return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo));
    }

    default:
      return state;
  }
};

export default todoReducer;
