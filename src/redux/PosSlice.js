import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 'newOrder',
};

export const posSlice = createSlice({
  name: "activeTabPos",
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = posSlice.actions;

export default posSlice.reducer;
