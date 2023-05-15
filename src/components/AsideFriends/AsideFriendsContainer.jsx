import { connect } from "react-redux";
import AsideFriends from "./AsideFriendrs";

let mapStateTOprops = (state) => ({friends: state.friends.friends })

const AsideFriendsContainer = connect(mapStateTOprops)(AsideFriends);

export default AsideFriendsContainer;