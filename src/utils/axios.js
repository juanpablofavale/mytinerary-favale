import axios from "axios";
import env from "react-dotenv";

export const server = axios.create({
    //baseURL:'http://localhost:3000/api'
    baseURL:import.meta.env.VITE_API_URL
})