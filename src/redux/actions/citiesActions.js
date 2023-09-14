import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

const getCitiesSync = createAction('getCitiesSync', (data) => {
    return {
        payload: data
    }
})

const setFilterSync = createAction('setFilterSync', (data) => {
    return {
        payload: data
    }
})

const setIndexAndCounterSync = createAction('setIndexAndCounterSync', (data) => {
    return {
        payload: data
    }
})

const getAllCitiesAsync = createAsyncThunk('getAllCitiesAsync', async (queries = "") => {
    try {
        const res = await server.get("/cities" + queries)
        return res.data
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        toast.error(error.message)
        toast.error(error.response.data.error)
        return []
    }
})

const getCityById = createAsyncThunk('getCityById', async (id) => {
    try {
        const res = await server.get("/cities/" + id)
        res.data.likes = res.data.response.itineraries_id.map(it => it.likes)
        res.data.comments = res.data.response.itineraries_id.map(it => it.comments)
        return res.data
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        toast.error(error.response.data.error)
        return []
    }
})

const setLike = createAsyncThunk('setLike', async ({id, token}) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + token}
        }
        const res = await server.put('/itineraries/like/' + id, null, config)
        return {...res.data}
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        toast.error(error.response.data.error)
        return {}
    }
})

export { getCityById, getCitiesSync, getAllCitiesAsync, setFilterSync, setIndexAndCounterSync, setLike}