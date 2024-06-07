import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { uiReducer } from "./slices/uiSlice";
import { userReducer } from "./slices/userSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
