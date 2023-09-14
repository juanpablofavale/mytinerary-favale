import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";
import { toast } from "react-toastify";

const signUpAsync = createAsyncThunk('signUpAsync', async (data) => {
    try {
        const res = await server.post('/auth/register', data)
        toast.success("User register successfully! Welcome " + res.data.response.name + "!")
        return res.data
    } catch (error) {
        toast.error(error.response.data.details)
        return {}
    }
})

const signInAsync = createAsyncThunk('signInAsync', async (data) => {
    try {
        const res = await server.post('/auth/login', data)
        toast.success(`Welcome ${res.data.response.name}!`)
        return {...res.data}
    } catch (error) {
        toast.error(error.response.data.details)
        return {logged:false}
    }
})

const signInAsyncToken = createAsyncThunk('signInAsyncToken', async (token) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + token}
        }
        const res = await server.post('/auth/token', null, config)
        return {...res.data, logged:true}
    } catch (error) {
        toast.error(error.response.data.details)
        return {logged:false}
    }
})

const signOutAsync = createAsyncThunk('signOutAsync', async (token) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + token}
        }
        const res = await server.post('/auth/logout', null, config)
        toast.success("User logout successfully!")
        return {...res.data, logged:false}
    } catch (error) {
        toast.error(error.response.data.details)
        return {}
    }
})

export { signUpAsync, signInAsync, signOutAsync, signInAsyncToken }