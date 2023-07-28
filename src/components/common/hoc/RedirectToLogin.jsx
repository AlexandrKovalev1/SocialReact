import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectToLogin = (Component) => {
    let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

    const RedirectComponent = (props) => {

        if (Boolean(props.isAuth)) return <Component {...props} />;

        return <Navigate to={`/login`} />

    }

    return connect(mapStateToProps)(RedirectComponent)
}

export default RedirectToLogin;