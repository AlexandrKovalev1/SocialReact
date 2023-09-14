import { createSelector } from "reselect";
import { AppStateType } from "./reduxStore";

export const getUserStatus = (state:AppStateType) => {
    return state.profilePage.userInfo.userStatus;
}

const getUserInfo = (state:AppStateType) => {
    return state.profilePage.userInfo.userProfile;
}

export const getUserInfoSelector = createSelector(getUserInfo, (info) => info);