import { createReducer } from "@reduxjs/toolkit";
import { signInAsync, signOutAsync, signUpAsync, signInAsyncToken } from "../actions/authActions";

const initialState = {
    user: {},
    token: null,
    message: "",
    logged: false,
    registered: false
}

const authReducer = createReducer(initialState, (builder) => builder
    .addCase(signUpAsync.fulfilled, (state, action) => {
        const newState = {...state, message: action.payload, registered: true}
        return newState
    })
    .addCase(signInAsync.fulfilled, (state, action) => {
        const newState = {...state, token:action.payload.token, user: action.payload.response, logged: action.payload.logged, registered: false}
        return newState
    })
    .addCase(signOutAsync.fulfilled, (state, action) => {
        const newState = {token: null, user: {}, logged: false, message: "User logged out successfully!", registered: false}
        return newState
    })
    .addCase(signInAsyncToken.fulfilled, (state, action) => {
        const newState = {...state, token:action.payload.token, user: action.payload.response, logged: true, registered: false}
        return newState
    })
)

export default authReducer