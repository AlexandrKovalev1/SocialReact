import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

    let postElements = props.posts.map(post =>
        <Post text={post.text}
            likesCount={post.likesCount}
            dizlikesCount={post.dizlikesCount}
            avatar={post.avatar} />)
        .reverse();

    return (
        <section className={classes.posts}>
            {postElements}
        </section>
    )
}

export default Posts;