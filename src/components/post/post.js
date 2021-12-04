import styles from './post.module.css'
import { useState } from 'react';
import axios from 'axios';

const Post = ({post, handleDelete}) => {
    const [content,setContent] = useState(post.body);
    const baseUrl = "https://jsonplaceholder.typicode.com/posts/"+post.id;
    const handleChange = (event) => {
        setContent(event.target.value);
        console.log(content);
    };
    post.body = content;
    const updatePost = async () => {
        const response = await axios.put(baseUrl,post);
        console.log(response);
        console.log(post);
    }
    const deletePost = async () => {
        const response = await axios.delete(baseUrl);
        console.log(response);
        console.log(post);
        handleDelete(post.id);
    }

    return ( 
        <div className={styles.post}>
            <h3>{post.title}</h3>
            <textarea name="" id="" cols="30" rows="10" value={content} onChange={handleChange}></textarea>
            <div className={styles.btnContainer}>
                <button className={styles.btnUp} onClick={updatePost} >Update</button>
                <button className={styles.btnDel} onClick={deletePost}>Delete</button>
            </div>
        </div>
     );
}
 
export default Post;