import { AppStateType } from "./reduxStore";

export const getUserAutorizedId = (state:AppStateType) => {
    return state.auth.id;
}

export const getIsAuth = (state:AppStateType) => {
    return state.auth.isAuth;
}

export const getIsFetching = (state:AppStateType) => {
    return state.auth.isFetching;
}

export const getCaptcha = (state:AppStateType) => {
return state.auth.captcha;
}