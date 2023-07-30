import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/authReducer";
import { getIsAuth, getIsFetching } from "../../redux/auth-selectors";


const HeaderContainer = (props) => {

    return (
        <Header
            isAuth={props.isAuth}
            isFetching={props.isFetching}
            logout={props.logout}
        />
    )
}


let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    isFetching: getIsFetching(state),
});

export default connect(mapStateToProps, { logout })(HeaderContainer)