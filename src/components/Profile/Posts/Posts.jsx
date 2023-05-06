import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

    let postItem = props.posts.map(post =>
        <Post
            key={post.id}
            id={post.id}
            text={post.text}
            avatar={post.avatar}
            likesCount={post.likesCount}
            dizlikesCount={post.dizlikesCount}
        />
    ).reverse()

    return (
        <section className={classes.posts}>
            {postItem}
        </section>
    )
}

export default Posts;