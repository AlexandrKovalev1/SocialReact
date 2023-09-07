import { getAuthUserData } from './authReducer.ts'

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


type InitialStateType ={
    isInitiallized: boolean
}

let initialState:InitialStateType = {
    isInitiallized: false,
}

const appReducer = (state = initialState, action:any):InitialStateType => {

    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            isInitiallized: true,
        }
    }

    return state;
}

type SetInitializedActionType = {
    type: typeof INITIALIZED_SUCCESS
}

const setInitialzed = ():SetInitializedActionType => ({ type: INITIALIZED_SUCCESS });

export const initializedApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => dispatch(setInitialzed()))
}

export default appReducer;