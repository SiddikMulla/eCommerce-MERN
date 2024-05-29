import { createSlice } from "@reduxjs/toolkit";
import { cartPricing } from "../src/utils/cartUtils";


const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { // corrected from 'reducer' to 'reducers'
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(x => x._id === item._id); // fixed find function

      if (existItem) {
        state.cartItems = state.cartItems.map(x =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item]; // updated state immutably
      }

      return cartPricing(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;