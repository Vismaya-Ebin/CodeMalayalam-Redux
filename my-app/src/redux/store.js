import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
  showLabel: true,
};

function appReducer(prevState = initialState, action) {
  switch (action.type) {
    case "increment":
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
const store = configureStore({ reducer: appReducer });

export default store;
