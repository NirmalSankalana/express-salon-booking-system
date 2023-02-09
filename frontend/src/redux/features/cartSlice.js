import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    employee: "",
    dateTime: {},
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
    addEmployeeToBooking: (state, action) => {
      state.employee = action.payload;
    },
    addDateTimeToBooking: (state, action) => {
      state.dateTime = action.payload;
    },
    clearCart: (state, action) => {
      state.cart = [];
      // state.employee = "";
      // state.dateTime = {};
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  addEmployeeToBooking,
  addDateTimeToBooking,
  clearCart,
} = cartSlice.actions;
