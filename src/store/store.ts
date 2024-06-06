import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { uiReducer } from "./slices/uiSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
