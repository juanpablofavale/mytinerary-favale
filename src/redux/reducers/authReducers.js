import { createReducer } from "@reduxjs/toolkit";
import { signInAsync, signInSync, signOutAsync, signUpAsync, signInAsyncToken } from "../actions/authActions";

const initialState = {
    user: {},
    token: null,
    message: "",
    logged: false
}

const authReducer = createReducer(initialState, (builder) => builder
    .addCase(signUpAsync.fulfilled, (state, action) => {
        const newState = {...state, message: action.payload}
        return newState
    })
    .addCase(signInAsync.fulfilled, (state, action) => {
        const newState = {...state, token:action.payload.token, user: action.payload.response, logged: action.payload.logged}
        return newState
    })
    .addCase(signOutAsync.fulfilled, (state, action) => {
        const newState = {token: null, user: {}, logged: false, message: "User logged out successfully!"}
        return newState
    })
    .addCase(signInSync, (state, action) => {
        const newState = {...state, token: action.payload}
        return newState
    })
    .addCase(signInAsyncToken.fulfilled, (state, action) => {
        const newState = {...state, token:action.payload.token, user: action.payload.response, logged: true}
        return newState
    })
)

export default authReducer