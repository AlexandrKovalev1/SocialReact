import { connect } from "react-redux";
import AsideFriends from "./AsideFriendrs";
import HideComponentIfNotAutorized from "../common/hoc/HideComponentIfNotAutorized";
import { compose } from "redux";

let mapStateToProps = (state) => {
    let friendsOnline =
        state.friends.friends.filter(friend => friend.status === 'Online')
    return {
        friends: friendsOnline,
    };
}

const AsideFriendsContainer = compose(
    connect(mapStateToProps),
    HideComponentIfNotAutorized,
)(AsideFriends)

export default AsideFriendsContainer;