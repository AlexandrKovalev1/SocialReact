import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import { compose } from "redux";
import WithRouter from "../../hoc/WithRouter";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : '29252';
        this.props.getProfile(userId);
        console.log(this.props);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId;
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            this.props.getProfile(userId);
        }
    }


    render() {
        return (
            <Profile userInfo={this.props.userInfo} />
        )
    }
}





let mapStateToProps = (state) => ({ userInfo: state.profilePage.userInfo.userProfile });

export default compose(
    connect(mapStateToProps, { getProfile }),
    WithRouter,
)(ProfileContainer);


