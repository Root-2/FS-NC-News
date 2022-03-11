import { getCommentsByID } from "../api"
import { useState, useEffect } from "react"

const CommentView = ({articleID}) => {
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(()=>{
        setLoading(true)
        getCommentsByID(articleID).then(({comments}) => {
            setComments(comments)
            setLoading(false)
    })
    }, []) 

    if(loading) { return (<h2>Loading Comments....</h2>)}
    else {
    return (
    <div>
        <ul>
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                    <div>
                        <h4>By: {comment.author} |  {comment.votes} Doots</h4>
                        <p>{comment.body}</p>
                    </div>
                    </li>
                )


            })}    
        </ul>
    </div>
    )}
}


export default CommentView