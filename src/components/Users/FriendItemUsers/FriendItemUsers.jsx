import classes from './FriendItemUsers.module.css'

const FriendItemUsers = (props) => {
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
            <small 
            className={`
            ${classes.status}
            ${props.status === 'Online'? classes.online : classes.offline}`} 
            >{props.status}</small>
        </li>
    )
}

export default FriendItemUsers;