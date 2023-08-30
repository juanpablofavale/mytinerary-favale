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
        console.log(error)
        return []
    }
})

const getCityById = createAsyncThunk('getCityById', async (id) => {
    try {
        const res = await server.get("/cities/" + id)
        return res.data.response
    } catch (error) {
        console.log(error)
        return []
    }
})

export { getCityById, getCitiesSync, getAllCitiesAsync, setFilterSync, setIndexAndCounterSync}