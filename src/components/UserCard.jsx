import { useContext } from "react"
import { UserContext } from "./Users"

export const UserCard = ({username, name, avatar_url}) => {

    const {user, setUser} = useContext(UserContext)

    const handleLogIn = () => {
        setUser(username)
    }

return(
    <div className="card">
        <h3>{username}</h3>
        <p>{name}</p>
        <img src={avatar_url} width="25%" className="avatar" alt={`avatar for ${username}`}/>
        <div>
        <button onClick={handleLogIn}>Log in as user</button>
        </div>
    </div>
)
}