import { connect } from "react-redux";
import Users from "./Users";
import {
    showNextPage, showPrevPage,
    getUsers, hideUser,
    followSucces,unfollowSucces,
    toggleFolowingIsProgress
} from "../../redux/usersReducer";
import React from "react";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }


    onShowNextUsers = () => {
        this.props.showNextPage();
        this.props.getUsers(this.props.currentPage);
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
        toggleFolowingIsProgress, getUsers,
        followSucces,unfollowSucces
    }
)(UsersContainer);;