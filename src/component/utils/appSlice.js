import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addData: (state, action) => {
            return action.payload;
        },
        removeData: (state, action) => {
            return null;
        }
    }
})
export const { addData, removeData } = appslice.actions;
export default appslice.reducer;