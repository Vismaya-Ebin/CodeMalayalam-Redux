import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const url = `https://reqres.in/api/products/3`;

const getDataInfo = createAsyncThunk('api/data',()=>{
return axios.get(url).then((response)=>{
    return response.data
})
})

const ApiReducer = createSlice({
    name: "api",
    initialState:0,
})


export {getDataInfo};
export default ApiReducer.reducer;