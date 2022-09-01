import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/reducers/counterSlice";

const CounterApp = () => {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      {isLogged && <h3> Valuable Information I shouldn't see</h3>}
    </div>
  );
};

export default CounterApp;
