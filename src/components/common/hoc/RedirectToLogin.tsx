import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as React from "react";
import { AppStateType } from "../../../redux/reduxStore";

type InjectedProps = {

}
type MapStatePropsType ={
    isAuth:boolean
}

const RedirectToLogin = <BaseProps extends InjectedProps & MapStatePropsType>(Component: React.ComponentType<BaseProps>) => {
    let mapStateToProps = (state: AppStateType) => ({ isAuth: state.auth.isAuth });


    const RedirectComponent = (props:MapStatePropsType) => {

        if (Boolean(props.isAuth)) return <Component {...props as BaseProps} />;

        return <Navigate to={`/login`} />

    }

    return connect<MapStatePropsType,{},InjectedProps,AppStateType>(mapStateToProps)(RedirectComponent)
}

export default RedirectToLogin;