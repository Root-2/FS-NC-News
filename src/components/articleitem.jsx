// This is the item used for displaying articles in the article list.

const ArticleItem = ({object}) => {
    console.log(object)
    return(
    <div className="article-item">
        <div className="title"><h2>{object.title}</h2>
        <span className="adjuster"></span></div>
        
        <p>{(object.body).slice(0, 128)+" (...) "}</p>
    </div> )
}

export default ArticleItem