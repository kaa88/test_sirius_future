import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { lessons, subjects } from "../../api/schedule";
import { DropdownItem } from "../../models/data";
import { ILesson } from "../../models/schedule";

interface IState {
  subjects: DropdownItem[];
  selectedSubject: DropdownItem | null;
  selectedMonth: string;
  lessons: ILesson[];
}

const initialState: IState = {
  subjects,
  selectedSubject: null,
  selectedMonth: "2024-06",
  lessons,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSelectedSubject: (
      state,
      action: PayloadAction<IState["selectedSubject"] | null | undefined>
    ) => {
      state.selectedSubject = action.payload || null;
    },
    setSelectedMonth: (state, action: PayloadAction<string>) => {
      state.selectedMonth = action.payload;
    },
  },
});

export const { setSelectedSubject, setSelectedMonth } = scheduleSlice.actions;

export const scheduleReducer = scheduleSlice.reducer;
