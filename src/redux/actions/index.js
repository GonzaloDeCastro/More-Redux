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

export const productShow = (product) => {
  return {
    type: types.productShow,
    payload: product.id,
  };
};

export const productAdd = (product) => {
  return {
    type: types.productAddToCart,
    payload: product.id,
  };
};

export const productRemoveCart = (product) => {
  return {
    type: types.productOneRemoveCart,
    payload: product.id,
  };
};

export const productRemoveAllCart = (product) => {
  return {
    type: types.productRemoveCart,
    payload: product.id,
  };
};
