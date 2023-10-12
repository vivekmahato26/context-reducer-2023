import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: {
      products: [],
      totalPrice: 0,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const cart = state.value;
      const product = action.payload;
      let price = product.price;
      if (product.discount) price -= product.discount;
      if (cart.products.length) {
        const productIndex = cart.products.findIndex((e) => e.id == product.id);
        if (productIndex == -1) {
          cart.products.push({
            ...product,
            productQty: 1,
          });
          cart.totalPrice += price;
        } else {
          cart.products[productIndex] = {
            ...cart.products[productIndex],
            productQty: cart.products[productIndex].productQty + 1,
          };
          cart.totalPrice += price;
        }
      } else {
        cart.products.push({
          ...product,
          productQty: 1,
        });
        cart.totalPrice = price;
      }
      state.value = cart;
    },
    removeFromCart: (state, action) => {
      const cart = state.value;
      const product = action.payload;
      let price = product.price;
      if (product.discount) price -= product.discount;
      if (cart.totalPrice == 0) return;
      const index = cart.products.findIndex((e) => e.id == product.id);
      if (index == -1) return;
      if (cart.products[index].productQty == 1) {
        cart.totalPrice -= price;
        if (cart.totalPrice < 1) cart.totalPrice = 0;
        cart.products = cart.products.filter((e) => e.id !== product.id);
      } else {
        cart.totalPrice -= price;
        cart.products[index].productQty -= 1;
      }
      state.value = cart;
    },
  },
});


export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;