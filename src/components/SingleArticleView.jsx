import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";

export const SingleArticleView = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true)
    getArticleById(article_id).
    then((data) => {
        setIsLoading(false)
      setSingleArticle(data);
    }).catch((err) =>{
        setIsLoading(false)
        setIsError(true)
    });
  }, []);

  if(isLoading) return <h2>Loading...</h2>

  if(isError) return <h2>There was an error!</h2>

  return (
    <section className="single-article">
      <h2>{singleArticle.title}</h2>
      <h3>{singleArticle.topic}</h3>
      <h4>by {singleArticle.author}</h4>
      <p>{singleArticle.body}</p>
      <img src={singleArticle.article_img_url} alt={`image relating to ${singleArticle.topic}`} width="100%"/>
      <Link to={`/articles/${article_id}/comments`}><h4>{singleArticle.comment_count} comments</h4></Link>
      <h4>{singleArticle.votes} likes</h4>
      <button>Like</button>
    </section>
  );
};
