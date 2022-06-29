import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./valueReducer";
import showLabelReducer from "./showLabelReducer";
import ApiReducer from './apiReducer';

const store = configureStore({
  reducer: {
   valueReducer: valueReducer,
  showLabel: showLabelReducer,
   apiReducer: ApiReducer
  },
});

export default store;
