import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchAPI, getArticlesByTopic, getArticleByID } from "../api"
import { Link } from "react-router-dom"

const ArticleView = () => {
    const {article_id} = useParams()
    const [loading, setLoading] = useState(true)
    const [article, setArticle] = useState([])

    useEffect(()=>{
        setLoading(true)
        getArticleByID(article_id).then((article) => {
            setLoading(false)
            setArticle(article)
    })

    }, []) 
    if (loading) { return <h1>Loading....</h1>}
    else {
        return (
            <div>
                <h1>{article.title}                
                </h1>
                <p>{article.body}</p>
                <Link to={`/articles`}>
                <h2>Return to Article List</h2>    
                </Link>
                <Link to={`/articles/${article_id}/comments`}>
                    <h2>View comments</h2></Link>
            </div>
        )
    }
}

export default ArticleView