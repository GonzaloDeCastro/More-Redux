import { counterTypes } from "../types/counterTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case counterTypes.increment:
      return state + action.payload;
    case counterTypes.decrement:
      return state - 1;
    case counterTypes.reset:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
