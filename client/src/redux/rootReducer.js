import { combineReducers } from "@reduxjs/toolkit";
import portfolio from "./slices/portfolio";

const rootReducer = combineReducers({
  portfolio: portfolio,
});

export default rootReducer;
