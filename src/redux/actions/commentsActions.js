import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";
import { toast } from "react-toastify";

const postComment = createAsyncThunk('postComment', async ({data, token}) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + token}
        }
        const res = await server.post('/comments', data, config)
        toast.success("Comment added successfully!")
        return res.data.response
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        toast.error(error.response.data.error)
        return {}
    }
})

const putComment = createAsyncThunk('putComment', async ({comment, id, token}) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + token}
        }
        const res = await server.put('/comments/' + id, {comment:comment}, config)
        toast.success("Comment edited successfully!")
        return res.data.response
    } catch (error) {
        console.log(error)
        error.response.data.details?.map(e => toast.error(e.message))
        toast.error(error.response.data.error)
        return {}
    }
})

const deleteComment = createAsyncThunk('deleteComment', async ({id, token}) => {
    try {
        const config = {
            headers: {Authorization: 'Bearer ' + token}
        }
        const res = await server.delete('/comments/' + id, config)
        toast.success('Comment deleted successfully!')
        return res.data.response
    } catch (error) {
        error.response.data.details?.map(e => toast.error(e.message))
        toast.error(error.response.data.error)
        return {}
    }
})

export { postComment, putComment, deleteComment }