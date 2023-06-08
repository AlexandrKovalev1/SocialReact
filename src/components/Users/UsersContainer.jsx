import { connect } from "react-redux";
import Users from "./Users";
import {
    showNextPage, showPrevPage,
    addUserToFriends, hideUser,
    unfollow, setUsers,
    setTotalUsersCount, setIsFetching,
} from "../../redux/usersReducer";
import React from "react";
import axios from 'axios';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onShowNextUsers = () => {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items)
            })
        this.props.showNextPage();
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
    }

};


export default connect(mapStateToProps, 
    {showNextPage,showPrevPage,hideUser,addUserToFriends,unfollow,setUsers,setTotalUsersCount,setIsFetching}
    )(UsersContainer);;