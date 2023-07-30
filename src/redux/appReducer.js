import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    isInitiallized: false,
}

const appReducer = (state = initialState, action) => {

    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            isInitiallized: true,
        }
    }

    return state;
}

const setInitialzed = () => ({ type: INITIALIZED_SUCCESS });

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => dispatch(setInitialzed()))
}

export default appReducer;