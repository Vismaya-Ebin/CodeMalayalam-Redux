import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement} from "./reduxToolkit/valueReducer";

export default function ReduxToolkit() {
const dispatch = useDispatch();
const value = useSelector((state) => {
  console.log(state);
    return state.valueReducer;
   
  });
  console.log(value);
  return (
    <div><h1>ReduxToolkit</h1>
    <div className="react-redux">
  <button onClick={()=>{dispatch(increment())}}>+</button>
  {value}
  <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
    </div>
  )
}
