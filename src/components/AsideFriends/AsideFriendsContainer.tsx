import { connect } from "react-redux"
import AsideFriends from "./AsideFriendrs"
import HideComponentIfNotAutorized from "../common/hoc/HideComponentIfNotAutorized"
import { compose } from "redux";
import { AppStateType } from "../../redux/reduxStore.ts";


let mapStateToProps = (state:AppStateType) => {
    let friendsOnline =
        state.friends.friends.filter(friend => friend.status === 'Online')
    return {
        friends: friendsOnline,
    };
}

const AsideFriendsContainer = compose(
    connect(mapStateToProps),
    HideComponentIfNotAutorized
)(AsideFriends)

export default AsideFriendsContainer;