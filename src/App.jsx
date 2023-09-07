import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { ArticlesView } from "./components/ArticlesView";
import { SingleArticleView } from "./components/SingleArticleView";
import { CommentsView } from "./components/CommentsView";
import { TopicsView } from "./components/TopicsView";
import { UsersView } from "./components/UsersView";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticlesView />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticleView />}/>
          <Route path="/topics" element={<TopicsView />} />
          <Route path="/:topics/articles" element={<ArticlesView/>}/>
          <Route path="/users" element={<UsersView />}/>
      </Routes>
    </div>
  );
}

export default App;
