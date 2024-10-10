import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: { imageReducer, cartReducer }
});

export default store;
