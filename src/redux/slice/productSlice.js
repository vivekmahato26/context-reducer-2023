import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/api";

const productSlice = createSlice({
    name: "Product",
    initialState: {
        value: []
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending,(state,action) => {
            state.status = "pending";
            state.error = null;
            state.value = [];
        })
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            state.status = "fulfilled";
            state.error = null;
            state.value = action.payload;
        })
        builder.addCase(fetchProducts.rejected,(state,action) => {
            state.status = "rejected";
            state.error = action.error;
            state.value = [];
        })
    }

})

export const fetchProducts = createAsyncThunk("product/fetch",async()=>{
    const {data} = await axios.get(apiUrl);
    return data;
})

export default productSlice.reducer;