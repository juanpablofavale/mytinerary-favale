import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const signUpAsync = createAsyncThunk('signUpAsync', async (data) => {
    try {
        const res = await server.post('/auth/register', data)
        return res.data.response
    } catch (error) {
        console.log(error)
        return ""
    }
})

const signInAsync = createAsyncThunk('signInAsync', async (data) => {
    try {
        const res = await server.post('/auth/login', data)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
        return {}
    }
})

const signInSync = createAction('signInSync', (data) => {
    return {
        payload: data
    }
})

export { signUpAsync, signInAsync, signInSync }