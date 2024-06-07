import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../models/models";
import { users } from "../../api/fakeApiData";

interface IState {
  users: IUser[];
  activeUser: IUser["id"] | null;
}

const initialState: IState = {
  users,
  activeUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (
      state,
      action: PayloadAction<string | null | undefined>
    ) => {
      state.activeUser = action.payload || null;
    },
  },
});

export const { setActiveUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
