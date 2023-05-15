import classes from './FriendItemAside.module.css';


const FriendItemAside = (props) => {
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

export default FriendItemAside;