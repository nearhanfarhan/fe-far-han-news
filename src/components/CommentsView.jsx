import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../../utils/api";
import { CommentCard } from "./CommentCard";

export const CommentsView = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((data) => {
        return setComments(data);
      })
      .then(() => getArticleById(article_id))
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setArticle(data);
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
    <section className="cards">
      <h5>Showing comments for "{article.title}" </h5>
      {comments.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <section key={comment_id} className="card">
            <CommentCard
              comment_id={comment_id}
              body={body}
              author={author}
              votes={votes}
              created_at={created_at}
            />
          </section>
        );
      })}
    </section>
  );
};
