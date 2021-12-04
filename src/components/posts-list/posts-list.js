import { useEffect, useState } from "react";
import axios from "axios";
import styles from './posts-list.module.css'
import Post from "../post/post";

const PostsList = ({userId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/?userId="+userId);
            const data = response.data.filter((p,index) => index<5);
            console.log(data);
            setPosts(data);
        }
        fetchPosts();
    }, [])
    const handlePostDelete = (id) => {
        const newPosts = posts.filter(p => p.id !== id);
        setPosts(newPosts);
        console.log(newPosts);
    }
    return ( 
        <div className={styles.postsContainer}>
            {posts.map((p,index) => <Post key={index} post={p} handleDelete={handlePostDelete} />)}
        </div>
     );
}
 
export default PostsList;