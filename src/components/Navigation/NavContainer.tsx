import { connect } from "react-redux"
import Nav from "./Nav"
import HideComponentIfNotAutorized from "../common/hoc/HideComponentIfNotAutorized"
import { compose } from "redux"
import { AppStateType } from '../../redux/reduxStore'
import { NavItemPropsType } from '../../redux/navigationReducer'

type OwnProps = {}

type MapStatePropsType = {
    navigation: Array<NavItemPropsType>
}

let mapStateToProps = (state: AppStateType) => ({
    navigation: state.navigation.navItems,
})



const NavContainer = compose(
    connect<MapStatePropsType, {}, OwnProps, AppStateType>(mapStateToProps),
    HideComponentIfNotAutorized,
)(Nav);

export default NavContainer;