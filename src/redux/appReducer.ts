import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './authReducer.ts'
import { AppStateType } from './reduxStore.ts';



const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

//types

type InitialStateType = {
    isInitiallized: boolean
}

type SetInitializedActionType = {
    type: typeof INITIALIZED_SUCCESS
}

type ActionTypes = SetInitializedActionType;

type AppThuncType = ThunkAction<void, AppStateType, unknown, ActionTypes>

//initialState
let initialState: InitialStateType = {
    isInitiallized: false,
}


//reducer
const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {

    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            isInitiallized: true,
        }
    }

    return state;
}


// ActionCreators
const setInitialzed = (): SetInitializedActionType => ({ type: INITIALIZED_SUCCESS });

//ThunksCreators

export const initializedApp = (): AppThuncType => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => dispatch(setInitialzed()))
}

export default appReducer;