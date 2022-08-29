import { types } from "../types/types";

export const increment = (number) => {
  return {
    type: types.increment,
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: types.decrement,
  };
};

export const reset = () => {
  return {
    type: types.reset,
  };
};

export const deleteProducts = (todo) => {
  return {
    type: types.delete,
    payload: todo,
  };
};

export const updateProducts = (text) => {
  return {
    type: types.update,
    payload: text,
  };
};

export const addProducts = (newTodo) => {
  return {
    type: types.add,
    payload: newTodo,
  };
};
