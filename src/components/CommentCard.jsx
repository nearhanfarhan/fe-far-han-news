import { useContext, useState } from "react";
import { deleteCommentById, updateCommentVote } from "../../utils/api";
import { DateTimeDisplay } from "./DateTimeDisplay";
import { UserContext } from "./Users";

export const CommentCard = ({
  comment_id,
  body,
  author,
  votes,
  created_at,
  setComments,
  comments,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [voted, setVoted] = useState(false)
  const { user } = useContext(UserContext);

  const patchCommentVote = (vote) => {
    updateCommentVote(comment_id, vote).catch((err) => {
      setIsError(true);
      setErrorMsg(err);
    });
  };

  const renderCommentVote = (vote) => {
    const commentToUpdate = comments.find(
      (comment) => comment.comment_id === comment_id
    );
    commentToUpdate.votes = commentToUpdate.votes + vote;
    setComments([...comments]);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    deleteCommentById(comment_id)
      .then((data) => {
        if (data === 204) {
          setIsDeleting(false);
          setIsDeleted(true);
        }
      })
      .catch((err) => {
        setIsDeleting(false);
        setIsError(true);
      });
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (isError)
    return (
      <h2>
        {errorMsg.response.status}: {errorMsg.response.data.msg}
      </h2>
    );
  if (isDeleting) return <h2>Deleting...</h2>;
  if (isDeleted) return <h2>Deleted successfully</h2>;

  return (
    <section>
      <h4>by {author}</h4>
      <p>{body}</p>
      <h4>{votes} votes</h4>
      <div>
        {comment_id && author === user ? (
          <button onClick={handleDelete}>Delete Comment</button>
        ) : comment_id && author !== user ? (
          voted? (<h3>Thanks for your vote!</h3>):(
          <div className="kudos-button-container">
            <button className="button" onClick={()=>{setVoted(true)}}>
              <img
                src="../../resources/thumbs_up.png"
                alt="thumbs up emoji"
                width="25%"
                onClick={() => {
                  patchCommentVote(1);
                  renderCommentVote(1);
                }}
              />
            </button>
            <button className="button" onClick={()=>{setVoted(true)}}>
              <img
                src="../../resources/thumbs_down.png"
                alt="thumbs down emoji"
                width="25%"
                onClick={() => {
                  patchCommentVote(-1);
                  renderCommentVote(-1);
                }}
              />
            </button>
          </div>)
        ) : null}
      </div>
      <DateTimeDisplay dateTimeString={created_at} />
    </section>
  );
};
