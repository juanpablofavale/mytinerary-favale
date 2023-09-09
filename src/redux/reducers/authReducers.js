import { createReducer } from "@reduxjs/toolkit";
import { signInAsync, signOutAsync, signUpAsync, signInAsyncToken, setMessage } from "../actions/authActions";

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
    .addCase(signInAsyncToken.fulfilled, (state, action) => {
        const newState = {...state, token:action.payload.token, user: action.payload.response, logged: true}
        return newState
    })
    .addCase(setMessage, (state, action) => {
        const newState = {...state, message: action.payload}
        return newState
    })
)

export default authReducer