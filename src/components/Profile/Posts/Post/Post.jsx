import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt='avatar' />
            </div>
            <div className={classes.content}>
                <p className={classes.post__text}>{props.text}</p>
            </div>
            <div className={classes.response}>
                <div className={classes.response__like}>
                    <span className={classes.response__count}>{props.likesCount}</span>
                    <img src='https://i.ibb.co/0FWFtvF/like.png' alt='like__img' />
                </div>
                <div className={classes.response__dizlike}>
                    <span className={classes.response__count}>{props.dizlikesCount}</span>
                    <img src='https://i.ibb.co/d5KvPD6/diz.png' alt='dizlike__img' />
                </div>
            </div>
        </div>
    )
}

export default Post;



