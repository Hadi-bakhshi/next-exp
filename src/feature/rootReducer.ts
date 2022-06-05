import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authentication/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
