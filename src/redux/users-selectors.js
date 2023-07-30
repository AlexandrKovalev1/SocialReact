export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCounUsers = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getFriends = (state) => {
    return state.friends.friends;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingIsProgress = (state) => {
    return state.usersPage.followingIsProgress;
}
