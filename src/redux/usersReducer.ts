import { ResponseCodesEnum, usersAPI } from "../api/api";
import { AppStateType } from "./reduxStore";
import { ThunkAction } from 'redux-thunk';

// variables and const
const SHOW_NEXT_PAGE = 'SHOW-NEXT-PAGE';
const SHOW_PREV_PAGE = 'SHOW-PREV-PAGE';
const HIDE_USER = 'HIDE-USER';
const ADD_USER_TO_FRIENDS = 'ADD-USER-TO-FRIENDS';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const TOGGLE_FOLOWING_IS_PROGRESS = 'TOGGLE-FOLOWING-IS-PROGRESS';

//types
export type UserItemType = {
    name: string
    id: number
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}

type InitialStateType = typeof initialState;

export type ShowNextPageActionType = {
    type: typeof SHOW_NEXT_PAGE
}

export type ShowPrevPageActionType = {
    type: typeof SHOW_PREV_PAGE
}

export type HideUserActionType = {
    type: typeof HIDE_USER
    index: number
}

type AddUserToFriendsActionType = {
    type: typeof ADD_USER_TO_FRIENDS
    userId: number
}

type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserItemType>
}

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USER_COUNT
    totalCount: number
}

type SetIsFetchingActionType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}

export type ToggleFolowingIsProgressActionType = {
    type: typeof TOGGLE_FOLOWING_IS_PROGRESS
    isFetching: boolean
    userId: number
}

type ActionsTypes = ShowNextPageActionType
    | ShowPrevPageActionType
    | HideUserActionType
    | AddUserToFriendsActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetTotalUsersCountActionType
    | SetIsFetchingActionType
    | ToggleFolowingIsProgressActionType

export type UsersThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export type UsersThunksFollowUnfollowTypes = ThunkAction<void, AppStateType, unknown, ActionsTypes>



//InitialState
const initialState = {
    users: [
    ] as Array<UserItemType>,
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: [] as Array<number>,
    showNextIsProgress: false,

};

//Reducer
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    if (action.type === SHOW_NEXT_PAGE) {
        let lastPage = Math.ceil(state.totalCount / state.pageSize);
        return {
            ...state,
            currentPage: state.currentPage === lastPage ? 1 : state.currentPage + 1,
        };
    }

    if (action.type === SHOW_PREV_PAGE) {
        console.log('prevUser');
        return state;
    }

    if (action.type === HIDE_USER) {
        return {
            ...state,
            users: state.users.map((user, index) => {
                if (index === action.index) {
                    return { ...state.users[state.users.length - 1] }
                }

                if (index === state.users.length - 1) {
                    return { ...state.users[action.index] }
                }
                return user;
            })
        }
    }

    if (action.type === ADD_USER_TO_FRIENDS) {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return { ...user, followed: true }
                }
                return user;
            })
        }
    }

    if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(user => {

                if (user.id === action.userId) {
                    return { ...user, followed: false };
                }

                return user;
            })
        }
    }


    if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...action.users]
        }
    }

    if (action.type === SET_TOTAL_USER_COUNT) {
        return {
            ...state,
            totalCount: action.totalCount,
        }
    }

    if (action.type === SET_IS_FETCHING) {
        return {
            ...state,
            isFetching: action.isFetching,
        }
    }

    if (action.type === TOGGLE_FOLOWING_IS_PROGRESS) {
        return {
            ...state,
            followingIsProgress: action.isFetching
                ? [...state.followingIsProgress, action.userId]
                : state.followingIsProgress.filter(id => id !== action.userId)
        }
    }

    return state;
};

//ActionsCreators
export const showNextPage = (): ShowNextPageActionType => ({ type: SHOW_NEXT_PAGE });

export const showPrevPage = (): ShowPrevPageActionType => ({ type: SHOW_PREV_PAGE });

export const hideUser = (index: number): HideUserActionType => ({ type: HIDE_USER, index });

export const addUserToFriends = (userId: number): AddUserToFriendsActionType => ({ type: ADD_USER_TO_FRIENDS, userId });

export const unfollow = (userId: number): UnfollowActionType => ({ type: UNFOLLOW, userId });

export const setUsers = (users: Array<UserItemType>): SetUsersActionType => ({ type: SET_USERS, users });

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USER_COUNT, totalCount })

export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({ type: SET_IS_FETCHING, isFetching })

export const toggleFolowingIsProgress =
    (isFetching: boolean, userId: number): ToggleFolowingIsProgressActionType =>
        ({ type: TOGGLE_FOLOWING_IS_PROGRESS, isFetching, userId })

//ThunksCreators
export const loadUsers = (page: number, size: number): UsersThunksTypes => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        let data = await usersAPI.getUsers(page, size);
        if (data.error === null) {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        }

    }
};

const followUnfollowSuccesFlow = (userId: number, apiMethod: any, actionCreator:(UserId:number)=>ActionsTypes):UsersThunksTypes => {
    return async (dispatch: any) => {
        dispatch(toggleFolowingIsProgress(true, userId));
        const data = await apiMethod(userId);
        if (data.resultCode === ResponseCodesEnum.Succes) {
            dispatch(actionCreator(userId));
            dispatch(toggleFolowingIsProgress(false, userId));
        }
    }
}

export const unfollowSucces = (userId: number):UsersThunksFollowUnfollowTypes => {
    return (
        followUnfollowSuccesFlow(userId,
            usersAPI.deleteFollower.bind(usersAPI),
            unfollow
        )
    )
};

export const followSucces = (userId: number):UsersThunksFollowUnfollowTypes => {

    return (
        followUnfollowSuccesFlow(userId,
            usersAPI.postFollower.bind(usersAPI),
            addUserToFriends
        )
    )
};

export default usersReducer;