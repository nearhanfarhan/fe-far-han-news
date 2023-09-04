export const CommentCard = ({
  comment_id,
  body,
  author,
  votes,
  created_at,
}) => {
  return (
    <section>
      {" "}
      <h4>by {author}</h4>
      <p>{body}</p>
      <h6>{votes} votes</h6>
      <button>click to vote</button>
      <h6>{created_at}</h6>
    </section>
  );
};
