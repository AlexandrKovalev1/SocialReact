import { ThunkAction } from "redux-thunk";
import { ResponseCodeCaptcha, ResponseCodesEnum, authAPI } from "../api/api";
import { FormValuesLoginPropsType, FormikSetStatusType } from "../commonTypes/commonTypes";
import { AppStateType } from "./reduxStore";
import { Dispatch } from "react";

// variables and const
const SET_DATA = 'SET-DATA';
const SET_IS_FETCHING_AUTH = 'SET-IS-FETCHING-AUTH';
const SET_CAPTCHA = 'authReducser/SET-CAPTCHA';

//types

export type CaptchaType = {
    isCaptcha: boolean
    captchaUrl: string
}

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    captcha: CaptchaType
};

type SetAuthDataActionPayloadType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

type SetAuthDataActionType = {
    type: typeof SET_DATA
    payload: SetAuthDataActionPayloadType
}

type SetIsFethingAuthActionType = {
    type: typeof SET_IS_FETCHING_AUTH
    isFetching: boolean
}

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    isCaptcha: boolean
    url: string
}

type ActionsTypes = SetAuthDataActionType
    | SetIsFethingAuthActionType
    | SetCaptchaActionType;

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
export type AuthThuncsTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


//InitialState
let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: {
        isCaptcha: false,
        captchaUrl: '',
    }
};

//Reducer
const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    if (action.type === SET_DATA) {
        return { ...state, ...action.payload };
    };

    if (action.type === SET_IS_FETCHING_AUTH) {
        return { ...state, isFetching: action.isFetching }
    };

    if (action.type === SET_CAPTCHA) {
        return {
            ...state,
            captcha: {
                ...state.captcha,
                isCaptcha: action.isCaptcha,
                captchaUrl: action.url
            }
        }
    }

    return state;
}

//ActionCreators
export const setAuthData = (
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean = true): SetAuthDataActionType =>
    ({ type: SET_DATA, payload: { email, id, login, isAuth } });

export const setIsFethingAuth = (isFetching: boolean): SetIsFethingAuthActionType =>
    ({ type: SET_IS_FETCHING_AUTH, isFetching });

export const setCaptcha = (isCaptcha: boolean,
    url: string = ''): SetCaptchaActionType =>
    ({ type: SET_CAPTCHA, isCaptcha, url });

//ThunksCreators
export const getAuthUserData = (): AuthThuncsTypes => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(setIsFethingAuth(true));
        const data = await authAPI.getIsAuthData();
        dispatch(setIsFethingAuth(false));
        if (data.resultCode === ResponseCodesEnum.Succes) {
            let { email = null, id = null, login = null } = { ...data.data };
            dispatch(setAuthData(email, id, login));
        }
    }
}

export const login = (authData: FormValuesLoginPropsType,
    setStatus: FormikSetStatusType): AuthThuncsTypes => {
    return async (dispatch: Dispatch<AuthThuncsTypes | ActionsTypes>, getState: GetStateType) => {

        dispatch(setIsFethingAuth(true));
        const data = await authAPI.login(authData);
        dispatch(setIsFethingAuth(false));

        const errorMessage = (data: { messages: Array<string> }) => {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            setStatus({ error: message });
        }


        if (data.resultCode === ResponseCodesEnum.Succes) {
            dispatch(getAuthUserData());
            dispatch(setCaptcha(false, ''));
        } else {

            if (data.resultCode === ResponseCodeCaptcha.addedCaptcha) {
                const dataCap = await authAPI.getCaptcha();
                dispatch(setCaptcha(true, dataCap.url));
            }

            errorMessage(data)
        }
    }
}

export const logout = (): AuthThuncsTypes => {
    return async (dispatch: DispatchType) => {

        dispatch(setIsFethingAuth(true));
        const data = await authAPI.logout();
        dispatch(setIsFethingAuth(false));

        if (data.resultCode === ResponseCodesEnum.Succes) {
            dispatch(setAuthData(null, null, null, false))
        }
    }

}



export default authReducer;