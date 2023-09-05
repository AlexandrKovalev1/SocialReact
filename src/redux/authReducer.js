import { authAPI } from "../api/api";


const SET_DATA = 'SET-DATA';
const SET_IS_FETCHING_AUTH = 'SET-IS-FETCHING-AUTH';
const SET_CAPTCHA = 'authReducser/SET-CAPTCHA';


let initialState = {
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


const authReducer = (state = initialState, action) => {
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



export const setAuthData = (email, id, login, isAuth = true) => ({ type: SET_DATA, payload: { email, id, login, isAuth } });

export const setIsFethingAuth = (isFetching) => ({ type: SET_IS_FETCHING_AUTH, isFetching });

export const setCaptcha = (isCaptcha, url = null) => ({ type: SET_CAPTCHA, isCaptcha, url });

export const getAuthUserData = () => {
    return async (dispatch) => {
        dispatch(setIsFethingAuth(true));
        const data = await authAPI.getIsAuthData();
        dispatch(setIsFethingAuth(false));
        if (data.resultCode === 0) {
            let { email, id, login } = { ...data.data };
            dispatch(setAuthData(email, id, login));
        }
    }
}

export const login = (authData, setStatus) => {
    return async (dispatch) => {

        dispatch(setIsFethingAuth(true));
        const data = await authAPI.login(authData);
        dispatch(setIsFethingAuth(false));

        const errorMessage = (data) => {
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