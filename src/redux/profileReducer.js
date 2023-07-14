import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_INFO = 'SET-USER-INFO';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
  userInfo: {
    userProfile: {},
    userStatus: '',
  },
  posts: [
    {
      id: '1',
      text: 'для создания в redux store вызывается функция createStore(). которая принимает Обьект содержащий некоторое колличество reduce() ',
      likesCount: '135',
      dizlikesCount: '3',
      avatar: 'https://sun9-16.userapi.com/impf/c840336/v840336463/49ae6/5DMwdk-7Yuc.jpg?size=540x720&quality=96&sign=04f0ff92a4507f076db4ed82c20c9a99&c_uniq_tag=2i1OWAjmF_mcYDn5XynsCl0Qu0JuW-sgw62U3CBTFnc&type=album',
    },
    {
      id: '2',
      text: 'dispatch - функция которая прнинимает action- это обьект который содержит как миннимум свойство:type. reducer - функция принимает state и action и меняет state если не меняется возвращает state по умолчанию . Action creater - функция которая создает объект Action.',
      likesCount: '100500',
      dizlikesCount: '7',
      avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/prikolnaya-kartinka-na-avu-dlya-patsanov.jpg',
    }
  ],
};


const profileReducer = (state = initialState, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: state.posts.length + 1,
      text: action.textPost,
      likesCount: Math.round(Math.random() * 10000),
      dizlikesCount: Math.round(Math.random() * 10000),
      avatar: 'https://sun9-16.userapi.com/impf/c840336/v840336463/49ae6/5DMwdk-7Yuc.jpg?size=540x720&quality=96&sign=04f0ff92a4507f076db4ed82c20c9a99&c_uniq_tag=2i1OWAjmF_mcYDn5XynsCl0Qu0JuW-sgw62U3CBTFnc&type=album',
    }

    return {
      ...state,
      posts: [...state.posts, newPost],
    }

  }


  if (action.type === SET_USER_INFO) {
    return {
      ...state,
      userInfo: { ...state.userInfo, userProfile: action.userProfile },

    }
  }

  if (action.type === SET_USER_STATUS) {
    return {
      ...state,
      userInfo: { ...state.userInfo, userStatus: action.status, },

    }
  }

  return state;

}

export const setUserInfo = (userProfile) => ({ type: SET_USER_INFO, userProfile });

export const addPostCreator = (textPost) => ({ type: ADD_POST, textPost });

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => dispatch(setUserInfo(data)));
    profileAPI.getStatus(userId).then(status => dispatch(setUserStatus(status)));
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setUserStatus(status))
        }
      })
  }
}

export default profileReducer;

