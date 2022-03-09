import axios from "axios";

export function fetchAPI(endpoint) {
    return axios.get(`https://nc-news-example-5.herokuapp.com/api/${endpoint}`, {
        params: {
            id: null
        }
    })
    .then (response => {
    return response.data})
}