import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/authSlice";

export const store= configureStore({
reduce:{
    user:authSlice
}
})