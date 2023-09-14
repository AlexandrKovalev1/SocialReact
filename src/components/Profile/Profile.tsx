import * as React from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import WithRouter, { WithRouterPropsType } from "../common/hoc/WithRouter"
import UserProfile from "./UserProfile/UserProfile"
import PostsContainer from "./Posts/PostsContainer"
import classes from './Profile.module.css'
import { useLayoutEffect } from "react"
import { getUserInfoSelector } from "../../redux/profile-selectors"
import { getIsAuth, getUserAutorizedId } from "../../redux/auth-selectors"
import { ProfileDataType, ProfileThunkType, getProfile, updateAvatar } from "../../redux/profileReducer.ts"
import { Navigate } from "react-router-dom"
import NewPost from "./NewPost/NewPostHooks"
import { AppStateType } from '../../redux/reduxStore.ts'
import { File } from 'buffer'

type OwnProps = {
    router: WithRouterPropsType

}

type MapStatePropsType = {
    userAutorizedId: number | null
    isAuth: boolean
    userInfo: ProfileDataType | null 
}

type MapDispatchPropsType = {
    getProfile: (userId: number) => ProfileThunkType
    updateAvatar: (file: globalThis.File) => ProfileThunkType
}

type ProfilePropsType = OwnProps & MapStatePropsType & MapDispatchPropsType

const Profile: React.FC<ProfilePropsType> = (props) => {
    let userId: number | null = +props.router.params.userId;
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

let mapStateToProps = (state: AppStateType) => ({
    userInfo: getUserInfoSelector(state),
    userAutorizedId: getUserAutorizedId(state),
    isAuth: getIsAuth(state),
});

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnProps, AppStateType>(mapStateToProps, { getProfile, updateAvatar }),
    WithRouter,
)(Profile)
