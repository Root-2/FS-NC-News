import '../App.css';
import { useEffect, useState } from "react"
import ArticleItem from "./articleitem";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    let output = ""

    let setLoading = false

    useEffect(() => {
         setLoading = true
         return fetch(`https://nc-news-dr.herokuapp.com/api/articles`).then((response) => {
         let articles = response.json().then((articles)=>{
            setArticles(articles)

         })
         setLoading = false
        })
    }, [])

    if (setLoading) return <h1>Loading....</h1>


    return (
        <ul className ="articleBrowse" >
            {articles.map((article)=> {
                return <li 
                key={article.article_id}
                > 
                {< ArticleItem object={article}/>} </li>

            })}
            
            </ul>
    )
}

export default ArticleList