import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById, getArticles, updateArticleVote } from "../../utils/api";
import { CommentsView } from "./CommentsView";

export const SingleArticleView = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [displayComments, setDisplayComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null)
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((data) => {
        setIsLoading(false);
        setSingleArticle(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(err)
      });
  }, []);

  const patchArticleVote = (vote) => {
    updateArticleVote(article_id, vote).catch((err) => {
      setIsError(true);
      setErrorMsg(err)
    });
  };
  const renderArticleVote = (vote) => {
    setSingleArticle((currentArticle) => {
      const updatedArticle = {...currentArticle}
      updatedArticle.votes += vote
      return updatedArticle
    })
  }

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>{errorMsg.response.status}: {errorMsg.response.data.msg}</h2>;

  return (
    <section className="single-article">
      <h2>{singleArticle.title}</h2>
      <h3>{singleArticle.topic}</h3>
      <h4>by {singleArticle.author}</h4>
      <p>{singleArticle.body}</p>
      <img
        src={singleArticle.article_img_url}
        alt={`image relating to ${singleArticle.topic}`}
        width="100%"
      />
      <h4>{singleArticle.votes} likes</h4>
      <div className="kudos-button-container">
        <button className="kudos-button">
          <img
            src="../../resources/thumbs_up.png"
            alt="thumbs up emoji"
            width="25%"
            onClick={() => {
              patchArticleVote(1);
              renderArticleVote(1);
            }}
          />
        </button>
        <button className="kudos-button">
          <img
            src="../../resources/thumbs_down.png"
            alt="thumbs down emoji"
            width="25%"
            onClick={() => {
              patchArticleVote(-1);
              renderArticleVote(-1);
            }}
          />
        </button>
      </div>
      <div>
        {displayComments ? (
          <CommentsView setDisplayComments={setDisplayComments} />
        ) : (
          <button onClick={() => setDisplayComments(true)}>
            Click to view {singleArticle.comment_count} comments
          </button>
        )}
      </div>
    </section>
  );
};
