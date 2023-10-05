import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export { store };
