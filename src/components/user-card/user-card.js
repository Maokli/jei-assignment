import { Link } from 'react-router-dom';
import styles from './user-card.module.css'
const UserCard = ({user}) => {

    return ( 
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={user.photo}/>
            </div>
            <div className={styles.text}>
                <h3>{user.name}</h3>
            </div>
            <Link to={{pathname: `/users/${user.id}`, state: user}} className={styles.btn}>Stalk Now</Link>
        </div>
     );
}
 
export default UserCard;