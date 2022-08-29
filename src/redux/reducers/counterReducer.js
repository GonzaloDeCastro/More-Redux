import { types } from "../types/types";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case types.increment:
      return state + action.payload;
    case types.decrement:
      return state - 1;
    case types.reset:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
