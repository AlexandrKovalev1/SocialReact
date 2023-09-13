import { connect } from "react-redux";
import * as React from 'react'
import LoginForm from "./LoginForm/LoginForm.tsx";
import classes from './LoginPage.module.css'
import { AuthThuncsTypes, CaptchaType, login } from "../../../redux/authReducer.ts";
import { Navigate } from "react-router-dom";
import { getCaptcha, getIsAuth } from "../../../redux/auth-selectors.ts";
import { AppStateType } from "../../../redux/reduxStore.ts";
import { FormValuesLoginPropsType, FormikSetStatusType } from "../../../commonTypes/commonTypes.ts";

type OwnType = {}

type MapStatePropsType = {
    isAuth: boolean
    captcha: CaptchaType
}

type MapDispatchPropsType = {
    login: (authData: FormValuesLoginPropsType,
        setStatus: FormikSetStatusType) => AuthThuncsTypes
}

type LoginPagePropsType = OwnType & MapStatePropsType & MapDispatchPropsType

const LoginPage: React.FC<LoginPagePropsType> = (props) => {

    if (props.isAuth) return <Navigate to={'/profile'} />;

    return (
        <div className={classes.wrapper}>
            <div>
                <h1>Log in</h1>
                <LoginForm login={props.login} captcha={props.captcha} />
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state),

})

export default connect<MapStatePropsType, {}, OwnType, AppStateType>(mapStateToProps, { login })(LoginPage);