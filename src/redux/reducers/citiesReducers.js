import { createReducer } from "@reduxjs/toolkit";
import { getCityById, setIndexAndCounterSync, getAllCitiesAsync, getCitiesSync, setFilterSync, setLike } from "../actions/citiesActions";
import { deleteComment, postComment, putComment } from "../actions/commentsActions";

const initialState = {
    cities: [],
    loading:false,
    city: {},
    filter:"",
    index:0,
    count:0,
    comments: [],
    likes:[]
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
        const newState = {...state, city: action.payload.response, comments: action.payload.comments, likes:action.payload.likes}
        return newState
    })
    .addCase(setLike.fulfilled, (state, action) => {
        const likes = action.payload.response.likes
        const newState = {...state, likes: likes}
        return newState
    })
    .addCase(postComment.fulfilled, (state, action) => {
        const {comments} = state
        const aux = [...comments, action.payload]
        const newState = {...state, comments: aux}
        return newState
    })
    .addCase(putComment.fulfilled, (state, action) => {
        const {comments} = state
        const aux = state.comments.filter(com => com._id != action.payload._id)
        const newState = {...state, comments: [...aux, action.payload]}
        return newState
    })
    .addCase(deleteComment.fulfilled, (state, action) => {
        const {comments} = state
        const newState = {...state, comments: state.comments.filter(com => com._id != action.payload._id)}
        return newState
    })
)

export default citiesReducer