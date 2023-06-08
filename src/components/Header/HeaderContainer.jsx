import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import axios from "axios";
import { setAuthData, setIsFethingAuth } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFethingAuth(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                this.props.setIsFethingAuth(false);
                if (response.data.resultCode === 0) {
                    let { email, id, login } = {...response.data.data};
                    this.props.setAuthData(email, id, login);
                }
            });
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            isFetching={this.props.isFetching}
        />;
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { setAuthData, setIsFethingAuth })(HeaderContainer)