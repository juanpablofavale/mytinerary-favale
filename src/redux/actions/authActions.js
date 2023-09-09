import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";
import { toast } from "react-toastify";

const signUpAsync = createAsyncThunk('signUpAsync', async (data) => {
    try {
        const res = await server.post('/auth/register', data)
        toast.success("User register successfully!")
        return {}
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        return {}
    }
})

const signInAsync = createAsyncThunk('signInAsync', async (data) => {
    try {
        const res = await server.post('/auth/login', data)
        toast.success(`Welcome ${res.data.response.name}!`)
        return {...res.data, logged:true}
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        return {logged:false}
    }
})

const signInAsyncToken = createAsyncThunk('signInAsyncToken', async (data) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + data}
        }
        const res = await server.post('/auth/token', null, config)
        toast.success(`Welcome ${res.data.response.name}!`)
        return {...res.data, logged:true}
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        return {logged:false}
    }
})

const signOutAsync = createAsyncThunk('signOutAsync', async (data) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + data}
        }
        const res = await server.post('/auth/logout', null, config)
        toast.success("User logout successfully!")
        return {...res.data, logged:false}
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        return {}
    }
})

export { signUpAsync, signInAsync, signOutAsync, signInAsyncToken }