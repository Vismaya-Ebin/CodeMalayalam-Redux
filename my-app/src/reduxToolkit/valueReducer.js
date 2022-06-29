import {createSlice} from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "value",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
  },
  extraReducers: {
    logOut:()=>{
      return 0;
      
    }
  }
});

 //How to take actions from reducers
 export const {increment, decrement} = valueSlice.actions;
 console.log("ACTIONS",valueSlice);
export default valueSlice.reducer;
