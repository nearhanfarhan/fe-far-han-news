import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";

export const ArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((data) => {
            setIsLoading(false);
setArticles(data)
    }).catch((err) => {
        console.log(err)
        setIsLoading(false)
        setIsError(true)
    });
  }, []);

if (isLoading) return (
    <h2>Loading...</h2>
)
if(isError) return (
    <h2>There was an error!</h2>
)


  return (
    <section className="cards">
      {articles.map(({ author, title, article_img_url, topic, article_id }) => {
        return (
          <section key={article_id} className="card">
            <Link to={`/articles/${article_id}`} >
            <ArticleCard
              author={author}
              title={title}
              article_img_url={article_img_url}
              topic={topic}
            />
            </Link>
          </section>
        );
      })}
    </section>
  );
};
