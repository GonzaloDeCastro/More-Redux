import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Todo#1",
  },
  {
    id: 2,
    title: "Todo#2",
  },
];

export const todoSlice = createSlice({
  name: "todoReducers",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todoEdit = action.payload;
      return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
