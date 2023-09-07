import { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";

export const TopicsView = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((data) => {
        setIsLoading(false);
        setTopics(data);
      })
      .catch((err) => {
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
    <section className="cards">
      {topics.map(({ slug, description }) => {
        return (
          <section key={slug} className="card">
              <Link to={`/${slug}/articles`}>
              <h2>{slug}</h2>
              <h5>{description}</h5>
          </Link>
            </section>
        );
      })}
    </section>
  );
};
