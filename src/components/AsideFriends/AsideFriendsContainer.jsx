import { connect } from "react-redux";
import AsideFriends from "./AsideFriendrs";
import HideComponentIfNotAutorized from "../../hoc/HideComponentIfNotAutorized";
import { compose } from "redux";

let mapStateTOprops = (state) => {
    let friendsOnline =
        state.friends.friends.filter(friend => friend.status === 'Online')

    return {
        friends: friendsOnline,
    };
}

const AsideFriendsContainer = compose(
    connect(mapStateTOprops),
    HideComponentIfNotAutorized,
)(AsideFriends)

export default AsideFriendsContainer;