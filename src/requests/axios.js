import axios from "axios";



const instanceUrl = axios.create({
    baseURL : "https://api.themoviedb.org/3",
})


export default instanceUrl;

// https://api.themoviedb.org/3/trending/all/week?api_key=ca236141ea1fa2bab2c06483f2ee9d03&language=en-US