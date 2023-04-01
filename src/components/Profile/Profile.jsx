import classes from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import UserProfile from './UserProfile/UserProfile'


const Profile = (props) => {
    return (
        <div className={classes.main}>
            <UserProfile />
            <NewPost
                newPostText={props.profileState.newPostText}
                dispatch={props.dispatch}
            />
            <Posts posts={props.profileState.posts} />
        </div>
    )
}

export default Profile;