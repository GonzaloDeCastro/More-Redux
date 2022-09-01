import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterReducer",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + action.payload;
    },
    decrement: (state, action) => {
      return state - 1;
    },
    reset: (state, action) => {
      return 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
