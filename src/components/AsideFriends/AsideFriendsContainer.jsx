import { connect } from "react-redux";
import AsideFriends from "./AsideFriendrs";

let mapStateTOprops = (state) => {
    let friendsOnline =
        state.friends.friends.filter(friend => friend.status === 'Online');

    return { friends: friendsOnline };
}


const AsideFriendsContainer = connect(mapStateTOprops)(AsideFriends);

export default AsideFriendsContainer;