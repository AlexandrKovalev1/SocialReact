import classes from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import UserProfile from './UserProfile/UserProfile'


const Profile = () => {
    return (
        <div className={classes.main}>
            <UserProfile />
            <NewPost />
            <Posts />
        </div>
    )
}

export default Profile;