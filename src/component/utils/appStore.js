import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appSlice";
import marsReducer from "./marsSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        mars: marsReducer
    }
})

export default appStore;