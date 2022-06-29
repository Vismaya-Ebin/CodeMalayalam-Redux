import { configureStore  } from "@reduxjs/toolkit";
import testMiddleware from "./testMiddleware.js";
import {applyMiddleware} from "redux";
const initialState = {
  value: 100,
  showLabel: true,
};

function appReducer(prevState = initialState, action) {
  switch (action.type) {
    case "increment":
      //immutable coding of state
      return {
        ...prevState,
        value: prevState.value + 1,
      };
    case "decrement":
      return { ...prevState, value: prevState.value - 1 };

    case "showLabel":
      return {
        ...prevState,
        showLabel: action.payload.showLabel,
      };
    default:
      return prevState;
  }
}
const store = configureStore({
  reducer: appReducer,
  middleware: [testMiddleware],
})


export default store;
