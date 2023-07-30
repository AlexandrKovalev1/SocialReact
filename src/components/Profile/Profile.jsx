import { connect } from "react-redux"
import { compose } from "redux"
import WithRouter from "../common/hoc/WithRouter"
import UserProfile from "./UserProfile/UserProfile"
import NewPostContainer from "./NewPost/NewPostContainer"
import PostsContainer from "./Posts/PostsContainer"
import classes from './Profile.module.css'
import { useEffect } from "react"
import { getUserInfo } from "../../redux/profile-selectors"
import { getIsAuth, getUserAutorizedId } from "../../redux/auth-selectors"
import { getProfile } from "../../redux/profileReducer"
import { Navigate } from "react-router-dom"


const ProfileContainerWithHooks = (props) => {
    let userId = props.router.params.userId ? props.router.params.userId : props.userAutorizedId;

    useEffect(() => {
        console.log('use')
        props.getProfile(userId);
    }, [userId]);


    if (!props.isAuth && Object.keys(props.router.params).length === 0) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className={classes.main}>
            <UserProfile userInfo={props.userInfo} />
            <NewPostContainer />
            <PostsContainer />
        </div>
    )
}

let mapStateToProps = (state) => ({
    userInfo: getUserInfo(state),
    userAutorizedId: getUserAutorizedId(state),
    isAuth: getIsAuth(state),
});

export default compose(
    connect(mapStateToProps, { getProfile }),
    WithRouter,
)(ProfileContainerWithHooks)
