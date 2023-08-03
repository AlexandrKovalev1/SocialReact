import { authAPI } from "../api/api";

const SET_DATA = 'SET-DATA';
const SET_IS_FETCHING_AUTH = 'SET-IS-FETCHING-AUTH';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};


const authReducer = (state = initialState, action) => {
    if (action.type === SET_DATA) {
        return { ...state, ...action.payload };
    };

    if (action.type === SET_IS_FETCHING_AUTH) {
        return { ...state, isFetching: action.isFetching }
    };

    return state;
}



export const setAuthData = (email, id, login, isAuth = true) => ({ type: SET_DATA, payload: { email, id, login, isAuth } });

export const setIsFethingAuth = (isFetching) => ({ type: SET_IS_FETCHING_AUTH, isFetching });

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

        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            setStatus({ error: message });
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