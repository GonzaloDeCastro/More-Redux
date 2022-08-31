import { counterTypes } from "../types/counterTypes";

export const increment = (number) => {
  return {
    type: counterTypes.increment,
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: counterTypes.decrement,
  };
};

export const reset = () => {
  return {
    type: counterTypes.reset,
  };
};

