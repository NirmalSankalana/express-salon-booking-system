import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    employee: "",
    date: "",
    time: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const serviceInCart = state.cart.find(
        (service) => service._id === action.payload._id
      );
      if (!serviceInCart) {
        state.cart.push({ ...action.payload });
      }
      // else {
      //   state.cart.push({ ...action.payload });
      // }
    },
    removeFromCart: (state, action) => {
      const removeService = state.cart.filter(
        (service) => service._id !== action.payload
      );
      state.cart = removeService;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart, setEmployeeToAService } =
  cartSlice.actions;
