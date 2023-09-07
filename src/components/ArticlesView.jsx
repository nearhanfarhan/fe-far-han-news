import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import { SortArticlesForm } from "./SortArticlesForm";

export const ArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { topics } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topics)
      .then((data) => {
        setIsLoading(false);
        setArticles(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>There was an error!</h2>;

  return (
    <>
      <SortArticlesForm topics={topics} setArticles={setArticles}/>
      <section className="cards">
        {articles.map(
          ({
            author,
            title,
            article_img_url,
            topic,
            article_id,
            created_at,
            comment_count,
            votes,
          }) => {
            return (
              <section key={article_id} className="card">
                <Link to={`/articles/${article_id}`}>
                  <ArticleCard
                    author={author}
                    title={title}
                    article_img_url={article_img_url}
                    topic={topic}
                    created_at={created_at}
                    comment_count={comment_count}
                    votes={votes}
                  />
                </Link>
              </section>
            );
          }
        )}
      </section>
    </>
  );
};
