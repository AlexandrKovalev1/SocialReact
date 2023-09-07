import { authAPI } from "../api/api";


const SET_DATA = 'SET-DATA';
const SET_IS_FETCHING_AUTH = 'SET-IS-FETCHING-AUTH';
const SET_CAPTCHA = 'authReducser/SET-CAPTCHA';

type CaptchaType = {
    isCaptcha: boolean
    captchaUrl: string | null
}

type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    captcha: CaptchaType
};




let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: {
        isCaptcha: false,
        captchaUrl: null,
    }
};


const authReducer = (state = initialState, action: any): InitialStateType => {
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
    url: string | null
}

export const setAuthData = (
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean = true): SetAuthDataActionType =>
    ({ type: SET_DATA, payload: { email, id, login, isAuth } });

export const setIsFethingAuth = (isFetching: boolean): SetIsFethingAuthActionType =>
    ({ type: SET_IS_FETCHING_AUTH, isFetching });

export const setCaptcha = (isCaptcha: boolean,
    url: string | null = null): SetCaptchaActionType =>
    ({ type: SET_CAPTCHA, isCaptcha, url });

export const getAuthUserData = () => {
    return async (dispatch: any) => {
        dispatch(setIsFethingAuth(true));
        const data = await authAPI.getIsAuthData();
        dispatch(setIsFethingAuth(false));
        if (data.resultCode === 0) {
            let { email = null, id = null, login = null } = { ...data.data };
            dispatch(setAuthData(email, id, login));
        }
    }
}

export const login = (authData: any, setStatus: any) => {
    return async (dispatch: any) => {

        dispatch(setIsFethingAuth(true));
        const data = await authAPI.login(authData);
        dispatch(setIsFethingAuth(false));

        const errorMessage = (data: any) => {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            setStatus({ error: message });
        }


        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(setCaptcha(false));
        } else {

            if (data.resultCode === 10) {
                const dataCap = await authAPI.getCaptcha();
                dispatch(setCaptcha(true, dataCap.url));
            }

            errorMessage(data)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {

        dispatch(setIsFethingAuth(true));
        const data = await authAPI.logout();
        dispatch(setIsFethingAuth(false));

        if (data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }

}



export default authReducer;