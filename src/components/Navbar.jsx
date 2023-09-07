import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
      <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};
