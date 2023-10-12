import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        value: 0
    },
    reducers: { //only for synchrous taks
        increment: (state,action) => {
            console.log(state,action);
            state.value++;
        },
        decrement: (state,action) => {
            state.value--;
        },
        increseBy: (state,action) => {
            state.value += action.payload
        } 
    }
})

console.log(counterSlice);
export const {increment,decrement,increseBy} = counterSlice.actions; 

export default counterSlice.reducer;