import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";
export const store = configureStore({
  reducer: {
    questions: questionSlice.reducer,
  },
});

// It should describe how dispatch works or what kind of data invokes with dispatching in application.
export type AppDispatch = typeof store.dispatch;
