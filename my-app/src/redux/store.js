import {configureStore} from '@reduxjs/toolkit';

const initialState = {
    value : 100
}

function appReducer(prevState = initialState,action){
    switch(action.type){
        case "increment":
            return {
                ...prevState,
                value : prevState.value + 1
            };
        case "decrement":
            return {...prevState, value : prevState.value - 1};
            default:
               return prevState;
    }

}
const store = configureStore({reducer:appReducer});

export default  store;