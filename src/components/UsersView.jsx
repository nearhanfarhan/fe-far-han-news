import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";
import { UserCard } from "./UserCard";

export const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
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
    <section className="cards">
      {users.map(({ username, name, avatar_url }) => {
        return (
          <section key={username}>
            <UserCard username={username} name={name} avatar_url={avatar_url} />
          </section>
        );
      })}
    </section>
  );
};
