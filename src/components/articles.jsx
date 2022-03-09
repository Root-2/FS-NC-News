import '../App.css';
import { useEffect, useState } from "react"
import ArticleItem from "./articleitem";
import Searchbar from './searchbar';
import {useLocation, useParams} from 'react-router-dom'
import {fetchAPI} from '../api';

const ArticleList = () => {
    const location = (useLocation())
    const params = useLocation()
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] =useState()
    const [query, setQuery] = useState(location.search)
    const [loading, setLoading] = useState(true)

    useEffect(() => { 
         setLoading(true)
            return fetchAPI(`articles/${query}`).then((data) => {
                setLoading(false)         
                setArticles(data.articles)     
            })
        }, [query] )

    if (loading) { return <h1>Loading....</h1> }
    else {
    return (

        <div>
            <Searchbar setQuery={setQuery}/>
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
}

export default ArticleList