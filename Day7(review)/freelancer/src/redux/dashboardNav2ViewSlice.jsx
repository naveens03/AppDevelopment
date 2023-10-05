import { createSlice } from "@reduxjs/toolkit";

export const dashboardNav2ViewSlice = createSlice({
  name: "dashboardNav2View",
  initialState: {
    dashboardNav2View: "OngoingProjects",
  },
  reducers: {
    changedashboardNav2view: (state, action) => {
      state.dashboardNav2View = action.payload;
    },
  },
});

export const { changedashboardNav2view } = dashboardNav2ViewSlice.actions;

export const selectdashboardNav2View = (state) =>
  state.dashboardNav2View.dashboardNav2View;

export default dashboardNav2ViewSlice.reducer;
