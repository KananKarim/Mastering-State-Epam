import { createSlice } from "@reduxjs/toolkit";
import { subscribeEmail } from "../thunk/subscribeThunk";

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
    },
    extraReducers: (builder) => {
      builder
        .addCase(subscribeEmail.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(subscribeEmail.fulfilled, (state, action) => {
          state.isLoading = false;
          state.subscribed = !state.subscribed;
        })
        .addCase(subscribeEmail.rejected, (state, action) => {
          state.isLoading = false;
        });
    },
  });

export const { toggleSubscription } = subscribeSlice.actions;

export default subscribeSlice.reducer;