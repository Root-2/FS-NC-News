import { Link } from "react-router-dom"
// This is the item used for displaying articles in the article list.

const ArticleItem = ({object}) => {
    return(
    <Link to={`/article/${object.article_id}`}>    
    <div className="article-item">
        <div className="title">
            <h2>{object.title}</h2>
        <span className="adjuster"></span></div>

    </div> </Link>
    )
}

export default ArticleItem
