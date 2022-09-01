import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../reducers/todoSlice";
import counterSlice from "../reducers/counterSlice";
import productSlice from "../reducers/productSlice";

export const store = configureStore({
  reducer: {
    todoReducers: todoSlice,
    counterReducer: counterSlice,
    productReducer: productSlice,
  },
});
