import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";
import { toast } from "react-toastify";

const signUpAsync = createAsyncThunk('signUpAsync', async (data) => {
    try {
        const res = await server.post('/auth/register', data)
        toast.success("User register successfully!")
        return {}
    } catch (error) {
        console.log(error)
        error.response.data.details?.map(e => toast.error(e.message))
        toast.error(error.response.data.error)
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
        toast.error(error.response.data.error)
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
        toast.error(error.response.data.error)
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
        toast.error(error.response.data.error)
        return {}
    }
})

export { signUpAsync, signInAsync, signOutAsync, signInAsyncToken }