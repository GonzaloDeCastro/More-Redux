import { todoTypes } from "../types/todoTypes";

export const deleteProducts = (todo) => {
  return {
    type: todoTypes.delete,
    payload: todo,
  };
};

export const updateProducts = (text) => {
  return {
    type: todoTypes.update,
    payload: text,
  };
};

export const addProducts = (newTodo) => {
  return {
    type: todoTypes.add,
    payload: newTodo,
  };
};

