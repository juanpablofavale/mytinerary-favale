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

const signInAsyncToken = createAsyncThunk('signInAsyncToken', async (data) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + data}
        }
        const res = await server.post('/auth/token', null, config)
        return res.data
    } catch (error) {
        console.log(error)
        return {}
    }
})

const signOutAsync = createAsyncThunk('signOutAsync', async (data) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + data}
        }
        const res = await server.post('/auth/logout', null, config)
        return res.data
    } catch (error) {
        console.log(error)
        return {}
    }
})

export { signUpAsync, signInAsync, signInSync, signOutAsync, signInAsyncToken }