export const getUserAutorizedId = (state) => {
    return state.auth.id;
}

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getIsFetching = (state) => {
    return state.auth.isFetching;
}