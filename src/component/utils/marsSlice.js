import { createSlice } from "@reduxjs/toolkit";

const marsSlice = createSlice({
    name: "mars",
    initialState: {
        marsData: null
    },
    reducers: {
        addIMGData: (state, action) => {
            state.marsData = action.payload;
        },

    }
})

export const { addIMGData, removeIMGData } = marsSlice.actions;
export default marsSlice.reducer;