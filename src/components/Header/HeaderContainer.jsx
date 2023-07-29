import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/authReducer";


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
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { logout })(HeaderContainer)