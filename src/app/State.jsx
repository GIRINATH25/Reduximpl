import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/handleSlice"

const Store = configureStore({
    reducer:{
        userinfo:userSlice
    }
})

export default Store