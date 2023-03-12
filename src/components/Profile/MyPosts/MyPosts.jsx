import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <section className={classes.content}>
            <div className='container'>
                <h2>My posts</h2>
                <div>
                   <textarea name="" id="" cols="30" rows="10"></textarea>
                   <button>Add post</button>
                </div>
                <div>
                    <ul className={classes.list__posts}>
                        <Post />
                        <Post />
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default MyPosts;