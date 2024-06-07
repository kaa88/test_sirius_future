import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IState {
  activeDropdown: string;
  activePopup: string;
}

const initialState: IState = {
  activeDropdown: "",
  activePopup: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveDropdown: (
      state,
      action: PayloadAction<string | null | undefined>
    ) => {
      state.activeDropdown = action.payload || "";
    },
    setActivePopup: (
      state,
      action: PayloadAction<string | null | undefined>
    ) => {
      state.activePopup = action.payload || "";
    },
  },
});

export const { setActivePopup, setActiveDropdown } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
