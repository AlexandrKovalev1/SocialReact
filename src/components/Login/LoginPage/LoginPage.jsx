import { connect } from "react-redux";
import LoginForm from "./LoginForm/LoginForm";
import classes from './LoginPage.module.css'
import { login } from "../../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { getCaptcha, getIsAuth } from "../../../redux/auth-selectors";



const LoginPage = (props) => {

    if (props.isAuth) return <Navigate to={'/profile'} />;

    return (
        <div className={classes.wrapper}>
            <div>
                <h1>Log in</h1>
                <LoginForm login={props.login} captcha={props.captcha}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state),

})

export default connect(mapStateToProps, { login })(LoginPage);