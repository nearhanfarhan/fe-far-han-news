import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import { ArticleCard } from "./ArticleCard";

export const ArticlesView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <section className="articles-card">
      {articles.map(({ author, title, article_img_url, topic, article_id }) => {
        return (
          <section key={article_id}>
            <ArticleCard
              author={author}
              title={title}
              article_img_url={article_img_url}
              topic={topic}
            />
          </section>
        );
      })}
    </section>
  );
};
