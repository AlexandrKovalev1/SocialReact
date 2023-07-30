import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import { compose } from "redux";
import WithRouter from "../common/hoc/WithRouter";
import { Navigate } from "react-router-dom";
import { getIsAuth, getUserAutorizedId, getUserInfo } from "../../redux/auth-selectors";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.userAutorizedId
        this.props.getProfile(userId);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.userAutorizedId
        if ((prevProps.router.params.userId !== this.props.router.params.userId)) {
            this.props.getProfile(userId);
        }
    }


    render() {

        if (!this.props.isAuth && Object.keys(this.props.router.params).length === 0) {
           return <Navigate to={'/login'} />
        }

        return (
            <Profile userInfo={this.props.userInfo} />
        )
    }
}





let mapStateToProps = (state) => ({
    userInfo: getUserInfo(state),
    userAutorizedId: getUserAutorizedId(state),
    isAuth: getIsAuth(state),
});

export default compose(
    connect(mapStateToProps, { getProfile }),
    WithRouter,
)(ProfileContainer);


