import axios from "axios";
const articlesAPI = axios.create({
    baseURL: "https://nc-news-example-5.herokuapp.com/api/articles"
})

const topicsAPI = axios.create({
    baseURL: "https://nc-news-example-5.herokuapp.com/api/topics"
})

export const getArticlesByTopic = (slug) => {
    if(!slug) { return articlesAPI.get("/").then((res)=> {
        return res.data.articles
    }) } else {
    return articlesAPI.get(`?topic=${slug}`).then((res)=> {
        return res.data.articles
    })} 
}

export const getArticleByID = (id) => {
    return articlesAPI.get(`/${id}`).then((res)=> {
        return res.data.article
    })
}

export const getAllArticles = (slug) => {
    return articlesAPI.get(`?topic=${slug}`).then((res)=> {
        return res.data.articles
    })
}

export const getTopics = () => {
    return topicsAPI.get().then((res)=> {
        return res.data.topics
    })
}