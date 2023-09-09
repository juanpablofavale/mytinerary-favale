import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const signUpAsync = createAsyncThunk('signUpAsync', async (data) => {
    try {
        const res = await server.post('/auth/register', data)
        return {}
    } catch (error) {
        const errores = error.response.data.details?.map(e => e.message)
        return errores
    }
})

const signInAsync = createAsyncThunk('signInAsync', async (data) => {
    try {
        const res = await server.post('/auth/login', data)
        return {...res.data, logged:true}
    } catch (error) {
        error.response.data.details?.map(e => alert(e.message))
        return {logged:false}
    }
})

const setMessage = createAction('setMessage', (data = "") => {
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
        console.log(res.data)
        return res.data
    } catch (error) {
        error.response.data.details?.map(e => alert(e.message))
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
        error.response.data.details?.map(e => alert(e.message))
        return {}
    }
})

export { signUpAsync, signInAsync, signOutAsync, signInAsyncToken, setMessage }