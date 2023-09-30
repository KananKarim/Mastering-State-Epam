import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subscribed: false
}


export const subscribeSlice = createSlice({
    name: "subscribe",
    initialState,
    reducers: {
        toggleSubscription: (state) => {
            state.subscribed = !state.subscribed;
        },
    }
})

export const { toggleSubscription } = subscribeSlice.actions;

export default subscribeSlice.reducer;