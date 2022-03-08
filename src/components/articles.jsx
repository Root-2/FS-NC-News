import '../App.css';
import { useEffect, useState } from "react"
import ArticleItem from "./articleitem";
import Searchbar from './searchbar';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState(["cooking"])

    let output = ""

    let setLoading = false

    useEffect(() => {
         setLoading = true
         return fetch(`https://nc-news-example-5.herokuapp.com/api/articles?topic=${topic}`).then((data) => {
         return data.json()})
         .then((data)=>{
             setArticles(data.articles)
         })
        
         setLoading = false
        }, [topic] )

    if (setLoading) return <h1>Loading....</h1>


    return (

        <div>
            <Searchbar setTopic={setTopic}/>
            <ul className ="articleBrowse" >
            {articles.map((article)=> {
                return <li 
                key={article.article_id}
                > 
                {< ArticleItem object={article}/>} </li>
                
            })}
        </ul>   
</div> )
}

export default ArticleList