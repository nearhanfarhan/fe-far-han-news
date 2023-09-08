import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return <div><h2>We're sorry, that page can't be found</h2>
    <Link to="/">Return to home page</Link></div>
}