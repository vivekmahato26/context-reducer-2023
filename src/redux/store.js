import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";

export default configureStore({
    reducer: {
        Counter: counterSlice,
        Products: productSlice,
        Cart: cartSlice
    }
})