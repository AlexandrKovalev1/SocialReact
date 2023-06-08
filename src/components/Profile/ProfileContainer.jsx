import axios from "axios";
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


class ProfileContainer extends React.Component {
    
    componentDidMount() { 
        let userId = this.props.router.params.userId ? this.props.router.params.userId : '25300';
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response =>this.props.setUserInfo(response.data));
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

let mapStateToProps = (state) => ({userInfo:state.profilePage.userInfo});

export default connect(mapStateToProps,{setUserInfo})(withRouter(ProfileContainer));


