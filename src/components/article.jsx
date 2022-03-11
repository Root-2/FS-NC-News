import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getArticleByID, patchVote } from "../api"
import { Link } from "react-router-dom"
import CommentView from "./comments"



const ArticleView = () => {
    const {article_id} = useParams()
    const [loading, setLoading] = useState(true)
    const [article, setArticle] = useState([])
    const [optDoots, setOptDoots] = useState([])

    useEffect(()=>{
        setLoading(true)
        getArticleByID(article_id).then((article) => {
            setLoading(false)
            setArticle(article)
            setOptDoots(article.votes)
    })
    }, []) 

    const adjustVotes = (num) => {
        
        const res = patchVote(article_id, num).then((res)=>{
            if(res) { setOptDoots((doots)=> doots + num) 
            } else {    
        }
    })
        
    }

    if (loading) { return <h1>Loading....</h1>}
    else {
        return (
            <div>
                <h1>{article.title}                
                </h1>
                <p>{article.body}</p>
                <button onClick={()=>adjustVotes(1)}>Updoot</button>
                <h1>Doots: {optDoots}</h1>
                <button onClick={()=>adjustVotes(-1)}>Downdoot</button>
                <Link to={`/articles`}>
                <h2>Return to Article List</h2>    
                </Link>
                < CommentView object={article_id}/>
            </div>
        )
    }
}

export default ArticleView