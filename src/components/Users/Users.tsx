import * as React from 'react'
import FriendItemUsers from './FriendItemUsers/FriendItemUsers';
import UserItem from './UserItem/UserItem';
import classes from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import {
    HideUserActionType, ShowNextPageActionType, ShowPrevPageActionType,
    ToggleFolowingIsProgressActionType, UserItemType
} from '../../redux/usersReducer';

type UsersPropsType = {
    friends: Array<FriendItemUsers>
    users: Array<UserItemType>
    hideUser: (index: number) => HideUserActionType
    followSucces: (userId: number) => void
    unfollowSucces: (userId: number) => void
    followingIsProgress: Array<number>
    showNext: () => ShowNextPageActionType
    showPrev: () => ShowPrevPageActionType
    isFetching: boolean
    onShowNextUsers: () => void

}

const Users: React.FC<UsersPropsType> = (props) => {
    let friendItems = props.friends.map(friend =>
        <FriendItemUsers
            id={friend.id}
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            status={friend.status}
        />
    );

    let userItems = props.users.map((user, index) =>
        <UserItem
            index={index}
            hideUser={props.hideUser}
            unfollowSucces={props.unfollowSucces}
            followSucces={props.followSucces}
            id={user.id}
            folowed={user.followed}
            key={user.id}
            fullname={user.name}
            avatar={user.photos.small}
            status={user.status}
            country={'user.location.country'}
            sity={'user.location.sity'}
            followingIsProgress={props.followingIsProgress}
        />
    )

    return (
        <div className={classes.main__settings}>
            <h2 className={classes.heading}>Найти собеседника</h2>
            <div className={classes.container}>
                <div className={classes.section__friends}>
                    <div className={classes.section__heading}>
                        <h3>Друзья</h3>
                        <span>Показать всех</span>
                    </div>
                    <ul className={classes.friends__list}>
                        {friendItems}
                    </ul>
                    <div className={classes.button__prev}>
                        <div onClick={props.showPrev}>
                            <div className={classes.arrow__left}>
                            </div>
                        </div>
                    </div>
                    <div className={classes.button__next}>
                        <div onClick={() => { alert('friends') }}>
                            <div className={classes.arrow__right}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.section__users}>
                    <div className={classes.section__heading}>
                        <h3>Все пользователи</h3>
                        <span>Показать всех</span>
                    </div>
                    <ul className={classes.users__list}>
                        {props.isFetching ? <Preloader /> : userItems}
                    </ul>
                    <div className={classes.button__next}>
                        <div onClick={() => { props.onShowNextUsers() }}>
                            <div className={classes.arrow__right}></div>
                        </div>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam cupiditate possimus itaque voluptate ex dicta iure nulla quia earum officia ab totam, cumque illum inventore. Voluptatum quos dolore quam.
                </p>
            </div>
        </div>
    )
}

export default Users;