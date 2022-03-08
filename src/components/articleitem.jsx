// This is the item used for displaying articles in the article list.

const ArticleItem = ({object}) => {
    return(
    <div className="article-item">
        <div className="title"><h2>{object.title}</h2>
        <span className="adjuster"></span></div>

    </div> )
}

export default ArticleItem