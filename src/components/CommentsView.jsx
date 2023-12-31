import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../../utils/api";
import { CommentCard } from "./CommentCard";
import { CommentAdder } from "./CommentAdder";

export const CommentsView = ({ setDisplayComments }) => {
  const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((data) => {
        setIsLoading(false);
        setComments(data);
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
    <div className="comments-container">
      <button onClick={() => setDisplayComments(false)} className="comments-button">Close comments</button>
      <CommentAdder article_id={article_id} setComments={setComments} />
      <section className="cards">
        {comments.map(({ comment_id, body, author, votes, created_at }) => {
          return (
            <section key={comment_id? (comment_id):(body)} className="card">
              <CommentCard
                comment_id={comment_id}
                body={body}
                author={author}
                votes={votes}
                created_at={created_at}
                setComments={setComments}
                comments={comments}
              />
            </section>
          );
        })}
      </section>
    </div>
  );
};
