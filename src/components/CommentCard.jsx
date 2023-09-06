import { useState } from "react";
import { updateCommentVote } from "../../utils/api";
import { DateTimeDisplay } from "./DateTimeDisplay";

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

  const patchCommentVote = (vote) => {
    updateCommentVote(comment_id, vote)
      .catch((err) => {
        setIsError(true);
      });
  };

  const renderCommentVote = (vote) => {
    const commentToUpdate = comments.find(
      (comment) => comment.comment_id === comment_id
    );
    commentToUpdate.votes = commentToUpdate.votes + vote;
    setComments([...comments]);
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>There was an error!</h2>;

  return (
    <section>
      {" "}
      <h4>by {author}</h4>
      <p>{body}</p>
      <h6>{votes} votes</h6>
      <div className="kudos-button-container">
        <button className="kudos-button">
          <img
            src="../../resources/thumbs_up.png"
            alt="thumbs up emoji"
            width="40%"
            onClick={() => {
              patchCommentVote(1);
              renderCommentVote(1);
            }}
          />
        </button>
        <button className="kudos-button">
          <img
            src="../../resources/thumbs_down.png"
            alt="thumbs down emoji"
            width="40%"
            onClick={() => {
              patchCommentVote(-1);
              renderCommentVote(-1);
            }}
          />
        </button>
      </div>
      <DateTimeDisplay dateTimeString={created_at} />{" "}
    </section>
  );
};
