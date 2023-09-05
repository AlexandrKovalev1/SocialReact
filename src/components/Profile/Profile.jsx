import { connect } from "react-redux"
import { compose } from "redux"
import WithRouter from "../common/hoc/WithRouter"
import UserProfile from "./UserProfile/UserProfile"
import PostsContainer from "./Posts/PostsContainer"
import classes from './Profile.module.css'
import { useLayoutEffect } from "react"
import { getUserInfoSelector } from "../../redux/profile-selectors"
import { getIsAuth, getUserAutorizedId } from "../../redux/auth-selectors"
import { getProfile, updateAvatar } from "../../redux/profileReducer"
import { Navigate } from "react-router-dom"
import NewPost from "./NewPost/NewPostHooks"


const Profile = (props) => {
    let userId = props.router.params.userId;
    if (!userId) {
        userId = props.userAutorizedId;
    } else {
        <Navigate to={'/login'} />
    }

    useLayoutEffect(() => {

        if (userId !== null) props.getProfile(userId);

    }, [userId]);


    if (!props.isAuth && Object.keys(props.router.params).length === 0) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className={classes.main}>
            <UserProfile
                userInfo={props.userInfo}
                isOwner={Boolean(!props.router.params.userId)}
                updateAvatar={props.updateAvatar}
            />
            <NewPost />
            <PostsContainer />
        </div>
    )
}

let mapStateToProps = (state) => ({
    userInfo: getUserInfoSelector(state),
    userAutorizedId: getUserAutorizedId(state),
    isAuth: getIsAuth(state),
});

export default compose(
    connect(mapStateToProps, { getProfile, updateAvatar }),
    WithRouter,
)(Profile)
