import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import { compose } from "redux";
import WithRouter from "../common/hoc/WithRouter";
import { Navigate } from "react-router-dom";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.myId
        this.props.getProfile(userId);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.myId
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
    userInfo: state.profilePage.userInfo.userProfile,
    myId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { getProfile }),
    WithRouter,
)(ProfileContainer);


