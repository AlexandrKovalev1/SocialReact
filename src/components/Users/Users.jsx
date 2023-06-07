import React from 'react';
import FriendItemUsers from './FriendItemUsers/FriendItemUsers';
import UserItem from './UserItem/UserItem';
import classes from './Users.module.css';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onShowNextUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => this.props.setUsers(response.data.items))
        this.props.showNext();
    }

    render() {
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
                            {this.props.friends.map(friend =>
                                <FriendItemUsers
                                    id={friend.id}
                                    key={friend.id}
                                    name={friend.name}
                                    avatar={friend.avatar}
                                    status={friend.status}
                                />
                            )}
                        </ul>
                        <div className={classes.button__prev}>
                            <a onClick={this.props.showPrev}>
                                <div className={classes.arrow__left}>
                                </div>
                            </a>
                        </div>
                        <div className={classes.button__next}>
                            <a onClick={() => { alert('friends') }}>
                                <div className={classes.arrow__right}></div>
                            </a>
                        </div>
                    </div>
                    <div className={classes.section__users}>
                        <div className={classes.section__heading}>
                            <h3>Все пользователи</h3>
                            <a >Показать всех</a >
                        </div>
                        <ul className={classes.users__list}>
                            {this.props.users.map((user, index) =>
                                <UserItem
                                    index={index}
                                    hideUser={this.props.hideUser}
                                    unfollow={this.props.unfollow}
                                    addFriend={this.props.addToFriends}
                                    id={user.id}
                                    folowed={user.folowed}
                                    key={user.id}
                                    fullname={user.name}
                                    avatar={user.photos.small}
                                    status={user.status}
                                    country={'user.location.country'}
                                    sity={'user.location.sity'}
                                />
                            )}
                        </ul>
                        <div className={classes.button__next}>
                            <a onClick={() => { this.onShowNextUsers() }}>
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
}


export default Users;