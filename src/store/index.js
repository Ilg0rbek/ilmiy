import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./store";

export const store = configureStore({
  reducer: {
    studentReducer,
  },
});
