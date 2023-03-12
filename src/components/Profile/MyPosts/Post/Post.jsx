import classes from './Post.module.css'

const Post = () => {
    return (
        <li className={classes.post__item}>
            <div className={classes.avatar}>
                <a className={classes.avatar__link} href='http://'>
                    <img className={classes.avatar__img} src='https://www.film.ru/sites/default/files/filefield_paths/aanganim.jpg' alt='' />
                </a>
            </div>
            <div>
                <p>
                    Some text
                </p>
            </div>
        </li>
    )
}


export default Post;