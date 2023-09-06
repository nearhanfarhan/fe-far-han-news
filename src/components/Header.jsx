import { useContext } from "react";
import { Navbar } from "./Navbar";
import { UserContext } from "./Users";
import { Link } from "react-router-dom";

export const Header = () => {

  const {user} = useContext(UserContext)
  return (
    <>
      <h1>FAR-HAN-NEWS</h1>
      {user? (<p>Logged in as {user}</p>):(<Link to="/users">Log in</Link>)}
      <Navbar />
    </>
  );
};
