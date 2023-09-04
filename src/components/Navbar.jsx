import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul>
      <li>
       <Link to="/articles">Articles</Link>
      </li>
      <li>
        <a href="news.asp">Topics</a>
      </li>
      <li>
        <a href="contact.asp">Users</a>
      </li>
    </ul>
  );
};
