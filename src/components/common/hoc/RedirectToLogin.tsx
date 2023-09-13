import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as React from "react";
import { AppStateType } from "../../../redux/reduxStore";

type InjectedProps = {

}

const RedirectToLogin = <BaseProps extends InjectedProps>(Component: React.ComponentType<BaseProps>) => {
    let mapStateToProps = (state: AppStateType) => ({ isAuth: state.auth.isAuth });


    const RedirectComponent = (props: any) => {

        if (Boolean(props.isAuth)) return <Component {...props} />;

        return <Navigate to={`/login`} />

    }

    return connect(mapStateToProps)(RedirectComponent)
}

export default RedirectToLogin;