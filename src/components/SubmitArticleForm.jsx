import { useContext, useState } from "react";
import { postArticle } from "../../utils/api";
import { UserContext } from "./Users";

export const SubmitArticleForm = () => {
  const { user } = useContext(UserContext);

  const emptyForm = {
    author: user,
    title: "",
    body: "",
    topic: "",
  };

  const [article, setArticle] = useState(emptyForm);
  const [isSubmitted, setIsSumbitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSumbitted(true);
    postArticle(article);
    setArticle(emptyForm);
  };

  if (isSubmitted)
    return (
      <>
        <h2>Article submitted</h2>
      </>
    );

    return (
      <div className="add-comments-form">
    <form onSubmit={handleSubmit} >
      <label>
        Title
        <input
          type="text"
          name="title"
          value={article.title}
          onChange={(event) => {
            setArticle({ ...article, title: event.target.value });
          }}
        />
      </label>
      <label>
        Body
        <input
          type="text"
          name="body"
          value={article.body}
          onChange={(event) => {
            setArticle({ ...article, body: event.target.value });
          }}
        />
      </label>
      <label>
        Topic
        <input
          type="text"
          name="topic"
          value={article.topic}
          onChange={(event) => {
            setArticle({ ...article, topic: event.target.value });
          }}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};
