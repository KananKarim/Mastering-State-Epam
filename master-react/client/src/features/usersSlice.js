import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setData } = usersSlice.actions;

export default usersSlice.reducer;