import axios from "axios";

export const server = axios.create({
    baseURL:'http://localhost:3000/api'
    //baseURL:'https://mytinerary-back-favale-6sxm-dev.fl0.io/'
})