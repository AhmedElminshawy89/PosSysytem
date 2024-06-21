import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./globalSlice";
import  { posSlice } from "./PosSlice";

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    activeTabPos: posSlice.reducer,
  },
});

export default store;
