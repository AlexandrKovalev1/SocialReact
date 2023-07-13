import { connect } from "react-redux";
import Nav from "./Nav";
import HideComponentIfNotAutorized from "../../hoc/HideComponentIfNotAutorized";
import { compose } from "redux";

let mapStateToProps = (state) => ({
    navigation: state.navigation.navItems,
})

const NavContainer = compose(
    connect(mapStateToProps),
    HideComponentIfNotAutorized,
)(Nav);

export default NavContainer;