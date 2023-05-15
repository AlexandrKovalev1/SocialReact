import FriendItemUsers from './FriendItemUsers/FriendItemUsers';
import UserItem from './UserItem/UserItem';
import classes from './Users.module.css';


const Users = (props) => {
    let userItem = props.users.map(user =>
        <UserItem
            hideUser={props.hideUser}
            addFriend={props.addToFriends}
            id={user.id}
            folowed={user.folowed}
            key={user.id}
            fullname={user.fullname}
            avatar={user.avatar}
            status={user.status}
            country={user.location.country}
            sity={user.location.sity}
        />
    );

    let friendItem = props.friends.map(friend =>
        <FriendItemUsers
            id={friend.id}
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            status={friend.status}
        />
    )

    return (
        <div className={classes.main__settings}>
            <h2 className={classes.heading}>Найти собеседника</h2>
            <div className={classes.container}>
                <div className={classes.section__friends}>
                    <div className={classes.section__heading}>
                        <h3>Друзья</h3>
                        <a href=''>Показать всех</a>
                    </div>
                    <ul className={classes.friends__list}>
                        {friendItem}
                    </ul>
                    <div className={classes.button__prev}>
                        <a onClick={props.showPrev}>
                            <div className={classes.arrow__left}>
                            </div>
                        </a>
                    </div>
                    <div className={classes.button__next}>
                        <a onClick={props.showNext}>
                            <div className={classes.arrow__right}></div>
                        </a>
                    </div>
                </div>
                <div className={classes.section__users}>
                    <div className={classes.section__heading}>
                        <h3>Все пользователи</h3>
                        <a href=''>Показать всех</a >
                    </div>
                    <ul className={classes.users__list}>
                        {userItem}
                    </ul>
                    <div className={classes.button__next}>
                        <a href="">
                            <div className={classes.arrow__right}></div>
                        </a>
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