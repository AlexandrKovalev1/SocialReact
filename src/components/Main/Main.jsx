import classes from './Main.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import UserProfile from './UserProfile/UserProfile'


const Main = () => {
    return (
        <main className={classes.main}>
            <UserProfile />
            <NewPost />
            <Posts />
        </main>
    )
}

export default Main;