
// https://youtube-search-and-download.p.rapidapi.com/trending?type=mu&hl=en&gl=US',

import axios from "axios";

const instance = axios.create({
    baseURL:'https://youtube-search-and-download.p.rapidapi.com/',
    headers:{
        "Content-Type": "application/json",
        'X-RapidAPI-Host':
         'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key':
        '3f3fad91e0mshe88ddce7b350803p12a4aajsn478d4c54391c',
    }
})

export { instance }