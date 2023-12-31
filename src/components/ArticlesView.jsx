import { useContext, useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import { SortArticlesForm } from "./SortArticlesForm";
import { UserContext } from "./Users";

export const ArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { topics } = useParams();
  const {user} = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true);
    getArticles(topics)
      .then((data) => {
        setIsLoading(false);
        setArticles(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(err);
      });
  }, []);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError)
    return (
      <h2>
        {errorMsg.response.status}: {errorMsg.response.data.msg}
      </h2>
    );

  return (
    <>
    {user? (<Link to="/articles/submit" ><button className = "button">Submit an article</button></Link>):(<h5><Link to="/users" >Log in </Link>to submit an article</h5>)}
      <SortArticlesForm topics={topics} setArticles={setArticles} />
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
                <Link to={`/articles/${article_id}`} className="link">
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
