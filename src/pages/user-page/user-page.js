import PostsList from "../../components/posts-list/posts-list";


const UserPage = (props) => {
    const user = props.location.state;
    return ( 
        <div>
            <h1>Welcome To  page {user.name}'s activity history</h1>
            <PostsList userId={user.id}></PostsList>
        </div>
     );
}
 
export default UserPage;