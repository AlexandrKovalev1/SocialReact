import * as React from 'react'
import classes from './AsideFriends.module.css'
import FriendItemAside from './FriendItemAside/FriendItemAside'
import {FriendItemType} from '../../commonTypes/commonTypes'



type OwnPropsType = {
    friends: Array<FriendItemType>

}

let AsideFriends: React.FC<OwnPropsType> = (props) => {
    let friendItem = props.friends.map(friend => <FriendItemAside
        id={friend.id}
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        status={friend.status}
    />
    )

    return (
        <aside className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h4 className={classes.heading}>Друзья онлайн</h4>
                    <div>
                        <ul className={classes.friendsList}>
                            {friendItem.slice(0, 5)}
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
};

export default AsideFriends;

