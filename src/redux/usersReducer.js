const SHOW_NEXT_PAGE = 'SHOW-NEXT-PAGE';
const SHOW_PREV_PAGE = 'SHOW-PREV-PAGE';
const HIDE_USER = 'HIDE-USER';
const ADD_USER_TO_FRIENDS = 'ADD-USER-TO-FRIENDS';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';

const initialState = {
    users: [
    ],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
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
                    return { ...user, folowed: true }
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
                    return { ...user, folowed: false };
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
            totalCount:action.totalCount,
        }
    }

    return state;
};



export const showNextPageCreator = () => ({ type: SHOW_NEXT_PAGE });

export const showPrevPageCreator = () => ({ type: SHOW_PREV_PAGE });

export const hideUserCreator = (index) => ({ type: HIDE_USER, index: index });

export const addUserToFriendsCreator = (userId) => ({ type: ADD_USER_TO_FRIENDS, userId: userId });

export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId: userId });

export const setUsersCreator = (users) => ({ type: SET_USERS, users });

export const setTotalUsersCountCreator = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount })



export default usersReducer;