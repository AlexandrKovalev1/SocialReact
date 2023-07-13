import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import { getAuthUserData } from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }


    render() {
        return <Header
            isAuth={this.props.isAuth}
            myId={this.props.myId}
            isFetching={this.props.isFetching}
        />;
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    myId: state.auth.id
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)