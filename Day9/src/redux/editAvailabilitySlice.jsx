import { createSlice } from "@reduxjs/toolkit";

export const editAvailabilitySlice = createSlice({
  name: "activenav1edit",
  initialState: {
    activenav1edit: "false",
  },
  reducers: {
    open: (state,action) => {
      state.activenav1edit = action.payload;
    },
    close: (state,action) => {
      state.activenav1edit = action.payload;
    },
  },
});

export const { open, close } = editAvailabilitySlice.actions;

export const selectActivenav1edit = (state) =>
  state.activenav1edit.activenav1edit;

export default editAvailabilitySlice.reducer;
