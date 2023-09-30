import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: true
}

export const sectionSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        toggleShow: (state) => {
            state.show = !state.show
        }
    }
})

export const { toggleShow } = sectionSlice.actions;

export default sectionSlice.reducer;