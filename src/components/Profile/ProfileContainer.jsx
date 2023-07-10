import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { profileAPI } from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : '29252';
        profileAPI.getProfile(userId).then(data => this.props.setUserInfo(data));
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId;
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            profileAPI.getProfile(userId).then(data => this.props.setUserInfo(data));
        }
    }


    render() {
        return (
            <Profile userInfo={this.props.userInfo} />
        )
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({ userInfo: state.profilePage.userInfo });

export default connect(mapStateToProps, { setUserInfo })(withRouter(ProfileContainer));


