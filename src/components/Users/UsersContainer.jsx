import { connect } from "react-redux";
import Users from "./Users";
import {
    showNextUsersCreator, showPrevUsersCreator,
    addUserToFriendsCreator, hideUserCreator
} from "../../redux/usersReducer";


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        friends: state.friends.friends,
    }

};

let mapDispatchToProps = (dispatch) => {

    return {
        showNext: () => {
            dispatch(showNextUsersCreator());
        },

        showPrev: () => {
            dispatch(showPrevUsersCreator());
        },
        hideUser: () => {
            dispatch(hideUserCreator());
        },

        addToFriends: () => {
            dispatch(addUserToFriendsCreator());
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;