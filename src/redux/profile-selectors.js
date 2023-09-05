import { createSelector } from "reselect";

export const getUserStatus = (state) => {
    return state.profilePage.userInfo.userStatus;
}

const getUserInfo = (state) => {
    return state.profilePage.userInfo.userProfile;
}

export const getUserInfoSelector = createSelector(getUserInfo, (info) => info);