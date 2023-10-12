import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import productSlice from "./slice/productSlice";

export default configureStore({
    reducer: {
        Counter: counterSlice,
        Products: productSlice
    }
})