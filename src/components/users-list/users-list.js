import axios from "axios";
import { useState, useEffect } from "react";
import UserCard from "../user-card/user-card";
import styles from './users-list.module.css'

const UsersList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const data = response.data;
            data.forEach((user,index) => 
                user.photo = `https://randomuser.me/api/portraits/${index%2 == 0 ? "men":"women"}/${index}.jpg`
            )
            console.log(data);
            setUsers(data);
        }
        fetchUsers();
    }, [])
    return ( 
        <div className={styles.container}>
            {users.map((user,index) => 
                <UserCard key={index} user={user}></UserCard>
            )}
        </div>
     );
}
 
export default UsersList;