import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";

export const SingleArticleView = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setSingleArticle(data);
    });
  }, []);

  return (
    <section className="single-article">
      <h2>{singleArticle.title}</h2>
      <h3>{singleArticle.topic}</h3>
      <h4>by {singleArticle.author}</h4>
      <p>{singleArticle.body}</p>
      <img src={singleArticle.article_img_url} width="100%"/>
      <h4>{singleArticle.comment_count} comments</h4>
      <h4>{singleArticle.votes} likes</h4>
      <button>Like</button>
    </section>
  );
};
