import { combineReducers } from "@reduxjs/toolkit";
import serviceReducer from "./features/servicesSlice";
import { cartReducer } from "./features/cartSlice";
import employeeReducer from "./features/employeeSlice";

const rootReducer = combineReducers({
  services: serviceReducer,
  cart: cartReducer,
  employees: employeeReducer,
});

export default rootReducer;
