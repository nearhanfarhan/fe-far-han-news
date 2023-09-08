
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { ArticlesView } from "./components/ArticlesView";
import { SingleArticleView } from "./components/SingleArticleView";
import { TopicsView } from "./components/TopicsView";
import { UsersView } from "./components/UsersView";
import { ErrorPage } from "./components/ErrorPage";

function App() {

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

