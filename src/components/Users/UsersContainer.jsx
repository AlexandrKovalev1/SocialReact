import { connect } from "react-redux";
import Users from "./Users";
import {
    showNextPage, showPrevPage,
    loadUsers, hideUser,
    followSucces, unfollowSucces,
    toggleFolowingIsProgress
} from "../../redux/usersReducer";
import React from "react";
import {
    getUsers, getCurrentPage, getFollowingIsProgress,
    getFriends, getIsFetching, getPageSize,
    getTotalCounUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.loadUsers();
    }


    onShowNextUsers = () => {
        this.props.showNextPage();
        this.props.loadUsers(this.props.currentPage);
    }

    render() {
        return (
            <Users
                users={this.props.users}
                friends={this.props.friends}
                showNext={this.props.showNextPage}
                showPrev={this.props.showPrevPage}
                hideUser={this.props.hideUser}
                followSucces={this.props.followSucces}
                unfollowSucces={this.props.unfollowSucces}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCounUsers(state),
        currentPage: getCurrentPage(state),
        friends: getFriends(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state)
    }

};


export default connect(mapStateToProps,
    {
        showNextPage, showPrevPage, hideUser,
        toggleFolowingIsProgress, loadUsers,
        followSucces, unfollowSucces
    }
)(UsersContainer);;