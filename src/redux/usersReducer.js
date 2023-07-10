const SHOW_NEXT_PAGE = 'SHOW-NEXT-PAGE';
const SHOW_PREV_PAGE = 'SHOW-PREV-PAGE';
const HIDE_USER = 'HIDE-USER';
const ADD_USER_TO_FRIENDS = 'ADD-USER-TO-FRIENDS';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const TOGGLE_FOLOWING_IS_PROGRESS = 'TOGGLE-FOLOWING-IS-PROGRESS';



const initialState = {
    users: [
    ],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: [],
    showNextIsProgress: false,

};

const usersReducer = (state = initialState, action) => {
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
                if (index === parseInt(action.index)) {
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



export const showNextPage = () => ({ type: SHOW_NEXT_PAGE });

export const showPrevPage = () => ({ type: SHOW_PREV_PAGE });

export const hideUser = (index) => ({ type: HIDE_USER, index });

export const addUserToFriends = (userId) => ({ type: ADD_USER_TO_FRIENDS, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount })

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export const toggleFolowingIsProgress = (isFetching, userId) => ({ type: TOGGLE_FOLOWING_IS_PROGRESS, isFetching, userId })


export default usersReducer;