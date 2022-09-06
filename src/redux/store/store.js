import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducers/productSlice";
import todoSlice from "../reducers/todoSlice";
import counterSlice from "../reducers/counterSlice";

export const store = configureStore({
  reducer: {
    todoReducers: todoSlice,
    counterReducer: counterSlice,
    productReducer: productSlice,
  },
});
