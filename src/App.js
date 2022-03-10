import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ArticleList from './components/articles';
import CommentView from './components/comments';
import Profile from './components/profile';
import ArticleView from './components/article';



function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <h1>NC News App</h1>
        <Routes>
        <Route path="/" element={<ArticleList />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:article_id" element={<ArticleView />} />
            <Route path="/comments" element={<CommentView />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>


    </div> 
    </BrowserRouter>
  );
}

export default App;
