import axios from "axios";

export default axios.create({
    baseURL: 'https://moviesdatabase.p.rapidapi.com',
})