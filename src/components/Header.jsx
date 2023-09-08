import { useContext } from "react";
import { Navbar } from "./Navbar";
import { UserContext } from "./Users";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user , setUser} = useContext(UserContext);
  return (
    <>
      <h1>FAR-HAN-NEWS</h1>
      {user ? (
        <div>
          <p>Logged in as {user}</p>
          <button onClick={(() =>{setUser("")})} className="button">Log out</button>
        </div>
      ) : (
        <button className="button"><Link to="/users">Log in</Link></button>
      )}
      <Navbar />
    </>
  );
};

