import * as React from 'react'
import { connect } from "react-redux";
import Users from "./Users";
import {
    showNextPage, showPrevPage, loadUsers, hideUser, followSucces, unfollowSucces,
    ShowNextPageActionType, UserItemType,
    ShowPrevPageActionType,
    HideUserActionType,
} from "../../redux/usersReducer";
import {
    getUsers, getCurrentPage, getFollowingIsProgress,
    getFriends, getIsFetching, getPageSize,
    getTotalCounUsers
} from "../../redux/users-selectors";
import { FriendItemType } from '../../commonTypes/commonTypes';
import { AppStateType } from '../../redux/reduxStore';


type OwnProps = {

}

type MapStatePropsType = {
    currentPage: number
    users: Array<UserItemType>
    friends: Array<FriendItemType>
    isFetching: boolean
    followingIsProgress: Array<number>
}

type MapDispatchPropsType = {
    loadUsers: (page: number, size: number) => void
    showNextPage: () => ShowNextPageActionType
    showPrevPage: () => ShowPrevPageActionType
    hideUser: (index: number) => HideUserActionType
    followSucces: (userId: number) => void
    unfollowSucces: (userId: number) => void
}

type UsersContainerPropsType = OwnProps
    & MapStatePropsType
    & MapDispatchPropsType




class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.loadUsers(1, 4);
    }


    onShowNextUsers = () => {
        this.props.showNextPage();
        this.props.loadUsers(this.props.currentPage, 4);
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
                followingIsProgress={this.props.followingIsProgress}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType) => {

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


export default connect<MapStatePropsType, MapDispatchPropsType, OwnProps, AppStateType>(mapStateToProps,
    {
        showNextPage, showPrevPage, hideUser, loadUsers,
        followSucces, unfollowSucces
    }
)(UsersContainer);;