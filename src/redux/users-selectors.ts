import { AppStateType } from "./reduxStore";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCounUsers = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage;
}

export const getFriends = (state:AppStateType) => {
    return state.friends.friends;
}

export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingIsProgress = (state:AppStateType) => {
    return state.usersPage.followingIsProgress;
}
