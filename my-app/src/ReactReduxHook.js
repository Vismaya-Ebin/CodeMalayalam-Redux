import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './App.css';
const ReactReduxHook = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.value;
  });
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  console.log("STATE", value);
  return (
    <div className="react-redux">
        <h2>React- Redux</h2><br/>
      <button onClick={increment}>Increment</button>
      <p>{value}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ReactReduxHook;
