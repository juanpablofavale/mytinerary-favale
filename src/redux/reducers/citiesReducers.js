import { createReducer } from "@reduxjs/toolkit";
import { getCityById, setIndexAndCounterSync, getAllCitiesAsync, getCitiesSync, setFilterSync } from "../actions/citiesActions";

const initialState = {
    cities: [],
    loading:false,
    city: {},
    filter:"",
    index:0,
    count:0
}

const citiesReducer = createReducer(initialState, (builder) => builder
    .addCase(getCitiesSync, (state, action) => {
        const newState = {...state, cities: action.payload}
        return newState
    })
    .addCase(getAllCitiesAsync.fulfilled, (state, action) => {
        const newState = {...state, cities: action.payload, loading: false}
        return newState
    })
    .addCase(getAllCitiesAsync.pending, (state, action) => {
        const newState = {...state, loading: true}
        return newState
    })
    .addCase(setFilterSync, (state, action) => {
        const newState = {...state, filter: action.payload}
        return newState
    })
    .addCase(setIndexAndCounterSync, (state, action) => {
        const newState = {...state, index: action.payload.index, count: action.payload.count}
        return newState
    })
    .addCase(getCityById.fulfilled, (state, action) => {
        const newState = {...state, city: action.payload}
        return newState
    })
)

export default citiesReducer