import { connect } from "react-redux";
import Users from "./Users";
import {
    showNextPageCreator, showPrevPageCreator,
    addUserToFriendsCreator, hideUserCreator, unfollowCreator,setUsersCreator, setTotalUsersCountCreator,
} from "../../redux/usersReducer";


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        friends: state.friends.friends,
    }

};

let mapDispatchToProps = (dispatch) => {

    return {
        showNext: () => {
            dispatch(showNextPageCreator());
        },

        showPrev: () => {
            dispatch(showPrevPageCreator());
        },
        hideUser: (index) => {
            dispatch(hideUserCreator(index));
        },

        addToFriends: (userId) => {
            dispatch(addUserToFriendsCreator(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowCreator(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount));
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;