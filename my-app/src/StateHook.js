import React from "react";
import { useState } from "react";
import './App.css';

export default function StateHook() {
  const [value, updateValue] = useState(0);
  function updateData() {
    updateValue(value + 1);
  }

  const decrement = () => {
    updateValue(value - 1);
  };
  return ( <div className="react-redux">
    <h2>useState Hook</h2>
  <button onClick={updateData}>Increment</button>
  {value}
  <button onClick={decrement}>Decrement</button>
</div>);
}
