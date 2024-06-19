import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNotificationMenuOpen: false,
    isQuickLinksMenuOpen: false,
    isSearchResultsMenuOpen: false,
    isMiniProfileMenuOpen: false
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsNotificationMenuOpen(state, action) {
            state.isNotificationMenuOpen = action.payload.value;
        },
        setIsQuickLinksMenuOpen(state, action) {
            state.isQuickLinksMenuOpen = action.payload.value;
        },
        setIsSearchResultsMenuOpen(state, action) {
            state.isSearchResultsMenuOpen = action.payload.value;
        },
        setIsMiniProfileMenuOpen(state, action) {
            state.isMiniProfileMenuOpen = action.payload.value;
        },
    }
});

export const { setIsNotificationMenuOpen, setIsQuickLinksMenuOpen, setIsSearchResultsMenuOpen, setIsMiniProfileMenuOpen } = globalSlice.actions;

export default globalSlice.reducer;