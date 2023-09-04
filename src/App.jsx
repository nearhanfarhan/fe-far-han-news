import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { ArticlesView } from "./components/ArticlesView";
import { SingleArticleView } from "./components/SingleArticleView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticlesView />}/>
        <Route path="/articles/:article_id" element={<SingleArticleView />} />
      </Routes>
    </div>
  );
}

export default App;
