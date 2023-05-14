import { connect } from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => ({navigation: state.navigation.navItems})

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;