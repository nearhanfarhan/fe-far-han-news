import { useContext, useState } from "react";
import { postCommentByArticleId } from "../../utils/api";
import { UserContext } from "./Users";
import { Link } from "react-router-dom";

export const CommentAdder = ({article_id, setComments}) => {
  const [newComment, setNewComment] = useState("");
  const [isError, setIsError] = useState(false)
  const {user} = useContext(UserContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    updateComments({author:user, body:newComment, created_at:Date.now()})
    postCommentByArticleId(article_id, user, newComment)
      .catch((err) => {
        setIsError(true)
      });
    setNewComment("");
  };

  const updateComments = (comment) => {
    setComments((currentComments) => {
      return [comment, ...currentComments];
    });
  };
  if (isError) return <h2>Something went wrong! Please try again</h2>;
  
  return (
    <>
    {user ? (<form className="comment-adder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a comment</label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      />
      <button type="submit">Add comment</button>
    </form>) : (<p><Link to="/users">Log in </Link>to post a comment</p>)}
   </>
  );
};
