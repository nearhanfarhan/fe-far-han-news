import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
       <Link to="/articles" className="link">Articles</Link>
      </li>
      <li>
      <Link to="/topics" className="link">Topics</Link>
      </li>
      <li>
      <Link to="/users" className="link">Users</Link>
      </li>
      <li>
      <Link to="/" className="link">Home</Link>
      </li>
    </ul>
  );
};
