import { connect } from "react-redux";
import Users from "./Users";
import {
    showNextPage, showPrevPage,
    addUserToFriends, hideUser,
    unfollow, setUsers,
    setTotalUsersCount, setIsFetching,
    toggleFolowingIsProgress
} from "../../redux/usersReducer";
import React from "react";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers().then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })

    }


    onShowNextUsers = () => {
        this.props.setIsFetching(true);
        this.props.showNextPage();
        usersAPI.getUsers(this.props.currentPage).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items)
        })

    }

    render() {
        return (
            <Users
                users={this.props.users}
                friends={this.props.friends}
                showNext={this.props.showNextPage}
                showPrev={this.props.showPrevPage}
                hideUser={this.props.hideUser}
                addUserToFriends={this.props.addUserToFriends}
                unfollow={this.props.unfollow}
                onShowNextUsers={this.onShowNextUsers}
                isFetching={this.props.isFetching}
                toggleFolowingIsProgress={this.props.toggleFolowingIsProgress}
                followingIsProgress={this.props.followingIsProgress}
            />
        )
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        friends: state.friends.friends,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }

};


export default connect(mapStateToProps,
    {
        showNextPage, showPrevPage, hideUser,
        addUserToFriends, unfollow, setUsers,
        setTotalUsersCount, setIsFetching, toggleFolowingIsProgress
    }
)(UsersContainer);;