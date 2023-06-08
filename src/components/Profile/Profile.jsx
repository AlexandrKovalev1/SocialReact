import classes from './Profile.module.css';
import UserProfile from './UserProfile/UserProfile'
import NewPostContainer from './NewPost/NewPostContainer';
import PostsContainer from './Posts/PostsContainer';


const Profile = (props) => {
    
    return (
        <div className={classes.main}>
            <UserProfile userInfo={props.userInfo}/>
            <NewPostContainer />
            <PostsContainer />
        </div>
    )
}

export default Profile;