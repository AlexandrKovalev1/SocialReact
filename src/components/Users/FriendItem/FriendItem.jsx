import classes from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <li className={classes.wrapper}>
            <div className={classes.avatar}>
                <a >
                    <img className={classes.avatar__img} src={props.avatar} alt="avatar" />
                </a>
            </div>
            <span className={classes.name}>
                {props.name}
            </span>
        </li>
    )
}

export default FriendItem;