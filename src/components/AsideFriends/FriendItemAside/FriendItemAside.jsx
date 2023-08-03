import classes from './FriendItemAside.module.css';


const FriendItemAside = (props) => {
    return (
        <li className={classes.wrapper}>
            <div className={classes.avatar}>
                <img className={classes.avatar__img} src={props.avatar} alt="avatar" />
            </div>
            <span className={classes.name}>
                {props.name}
            </span>
        </li>
    )
}

export default FriendItemAside;