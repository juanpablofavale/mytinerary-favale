import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import authReducer from "./reducers/authReducers";

export const store = configureStore({
    reducer:{
        citiesReducer,
        authReducer
    }
})