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
        return { ...state, ...action.data, isAuth: true };
    };

    if (action.type === SET_IS_FETCHING_AUTH) {
        return { ...state, isFetching: action.isFetching }
    };

    return state;
}

export const setAuthData = (email, id, login) => ({ type: SET_DATA, data: {email, id, login} });

export const setIsFethingAuth = (isFetching) => ({ type: SET_IS_FETCHING_AUTH, isFetching });

export default authReducer;