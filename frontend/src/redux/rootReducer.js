import { combineReducers } from "@reduxjs/toolkit";
import serviceReducer from "./features/servicesSlice";
import { cartReducer } from "./features/cartSlice";
import employeeReducer from "./features/employeeSlice";
import { userReducer } from "./features/userSlice";

const rootReducer = combineReducers({
  services: serviceReducer,
  cart: cartReducer,
  employees: employeeReducer,
  user: userReducer,
});

export default rootReducer;
