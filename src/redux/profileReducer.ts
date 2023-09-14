import { ThunkAction } from 'redux-thunk';
import { profileAPI } from "../api/api";
import { AppStateType } from './reduxStore';

// variables and const
const ADD_POST = 'ADD-POST';
const SET_USER_INFO = 'SET-USER-INFO';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_AVATAR = 'profile-reducer/SET-AVATAR'

//types
type PostType = {
  id: number,
  text: string,
  likesCount: number,
  dizlikesCount: number,
  avatar: string | null,
}

type UserInfoType = {
  userProfile: ProfileDataType | null,
  userStatus: string,
}

type InitialStateType = {
  userInfo: UserInfoType,
  posts: Array<PostType>,
}

type SetUserInfoActionType = {
  type: typeof SET_USER_INFO,
  userProfile: any
}

type AddNewPostActionType = {
  type: typeof ADD_POST,
  textPost: string,
}

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS,
  status: string,
}

type SetAvatarActionType = {
  type: typeof SET_AVATAR
  photos: PhotosProfileDataType
}

type ContactsProfileDataType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

type PhotosProfileDataType = {
  small: string
  large: string
}

export type ProfileDataType = {
  aboutMe: string
  userId?: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsProfileDataType
  photos?: PhotosProfileDataType
}

type ActionsTypes = SetUserInfoActionType
  | AddNewPostActionType
  | SetUserStatusActionType
  | SetAvatarActionType

export type ProfileThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


//InitialState
let initialState: InitialStateType = {
  userInfo: {
    userProfile: null,
    userStatus: '',
  },
  posts: [
    {
      id: 1,
      text: 'для создания в redux store вызывается функция createStore(). которая принимает Обьект содержащий некоторое колличество reduce() ',
      likesCount: 135,
      dizlikesCount: 3,
      avatar: 'https://sun9-16.userapi.com/impf/c840336/v840336463/49ae6/5DMwdk-7Yuc.jpg?size=540x720&quality=96&sign=04f0ff92a4507f076db4ed82c20c9a99&c_uniq_tag=2i1OWAjmF_mcYDn5XynsCl0Qu0JuW-sgw62U3CBTFnc&type=album',
    },
    {
      id: 2,
      text: 'dispatch - функция которая прнинимает action- это обьект который содержит как миннимум свойство:type. reducer - функция принимает state и action и меняет state если не меняется возвращает state по умолчанию . Action creater - функция которая создает объект Action.',
      likesCount: 100500,
      dizlikesCount: 7,
      avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/prikolnaya-kartinka-na-avu-dlya-patsanov.jpg',
    }
  ],
};

//Reducer
const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

  if (action.type === ADD_POST) {

    let newPost: PostType = {
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

  if (action.type === SET_AVATAR) {

    if (state.userInfo.userProfile) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          userProfile: {
            ...state.userInfo.userProfile,
            photos: action.photos,
          }
        },

      }
    }

  }

  return state;

}

//ActionCreators
export const setUserInfo = (userProfile: {}): SetUserInfoActionType => ({ type: SET_USER_INFO, userProfile });

export const addNewPost = (textPost: string): AddNewPostActionType => ({ type: ADD_POST, textPost });

export const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status })

export const setAvatar = (photos: PhotosProfileDataType): SetAvatarActionType => ({ type: SET_AVATAR, photos })

//ThunksCreators
export const getProfile = (userId: number | null): ProfileThunkType => {

  return async (dispatch) => {

    let data = await profileAPI.getProfile(userId);
    let status = await profileAPI.getStatus(userId);

    dispatch(setUserInfo(data));
    dispatch(setUserStatus(status));
  }
}

export const updateStatus = (status: string): ProfileThunkType => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.resultCode === 0) {
      dispatch(setUserStatus(status))
    }

  }
}

export const updateAvatar = (file: globalThis.File): ProfileThunkType => {

  return async (dispatch) => {
    let response = await profileAPI.updateAvatarImg(file);

    if (response.resultCode === 0) {

      dispatch(setAvatar(response.data.photos))
    }
  }
}

export const editProfile = (profileData: ProfileDataType): ProfileThunkType => {
  return async (dispatch, getState) => {
    let id = getState().auth.id;
    let response = await profileAPI.updateProfile(profileData);
    if (response.resultCode === 0) {
      dispatch(getProfile(id));
    }
  }
}

export default profileReducer;

