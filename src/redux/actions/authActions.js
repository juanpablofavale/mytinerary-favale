import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const signUpAsync = createAsyncThunk('signUpAsync', async (data) => {
    try {
        const res = await server.post('/auth/register', data)
        return res.data.response
    } catch (error) {
        error.response.data.details?.map(e => alert(e.message))
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
        error.response.data.details?.map(e => alert(e.message))
        console.log(error)
        return {}
    }
})

const signInSync = createAction('signInSync', (data) => {
    return {
        payload: data
    }
})

const signOutAsync = createAsyncThunk('signOutAsync', async (data) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + data}
        }
        const res = await server.post('/auth/logout', null, config)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
        return {}
    }
})
export { signUpAsync, signInAsync, signInSync, signOutAsync }