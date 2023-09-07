import { useEffect, useState } from "react"
import { getUsers } from "../../utils/api"
import { UserCard } from "./UserCard";

export const UsersView = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        getUsers().then((data) => {
            setUsers(data)
        })
    },[])

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>There was an error!</h2>;
  
    return (
        <section className="cards">
            {users.map(({username, name, avatar_url}) => {
                return (<UserCard username = {username} name = {name} avatar_url = {avatar_url} />)
            })}
        </section>
    )
}
