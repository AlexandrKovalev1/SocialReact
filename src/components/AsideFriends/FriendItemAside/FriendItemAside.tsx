import * as React from 'react';
import classes from './FriendItemAside.module.css';

type OwnPropsType = {
    id:string
    avatar: string
    name: string
    status:string
}

const FriendItemAside: React.FC<OwnPropsType> = ({ avatar, name, id, status }) => {
    return (
        <li className={classes.wrapper}>
            <div className={classes.avatar}>
                <img className={classes.avatar__img} src={avatar} alt="avatar" />
            </div>
            <span className={classes.name}>
                {name}
            </span>
        </li>
    )
}

export default FriendItemAside;