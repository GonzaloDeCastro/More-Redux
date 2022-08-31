import { todoTypes } from "../types/todoTypes";

const initialTodos = [
  { id: 1, title: "Todo#1" },
  { id: 2, title: "Todo#2" },
];

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case todoTypes.delete:
      return state.filter((todo) => todo.id !== action.payload);
    case todoTypes.add:
      return [...state, action.payload];
    case todoTypes.update: {
      const todoEdit = action.payload;
      return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo));
    }

    default:
      return state;
  }
};

export default todoReducer;
