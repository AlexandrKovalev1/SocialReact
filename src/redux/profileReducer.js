const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_INFO = 'SET-USER-INFO';

let initialState = {
  userInfo: {
    // aboutMe: 'Статус ...........',
    // contacts: {
    //   "facebook": null,
    //   "website": null,
    //   "vk": null,
    //   "twitter": null,
    //   "instagram": null,
    //   "youtube": null,
    //   "github": null,
    //   "mainLink": null
    // },
    // lookingForAJob: true,
    // lookingForAJobDescription: "Ноль скилла",
    // fullName: "Alexandr Kovalev",
    // userId: 100500,
    // photos: {
    //   small: "https://social-network.samuraijs.com/activecontent/images/users/25300/user-small.jpg?v=0",
    //   large: "https://stihi.ru/pics/2015/02/10/1261.jpg"
    // },
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
  newPostText: '',
};


const profileReducer = (state = initialState, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: state.posts.length + 1,
      text: state.newPostText,
      likesCount: Math.round(Math.random() * 10000),
      dizlikesCount: Math.round(Math.random() * 10000),
      avatar: 'https://sun9-16.userapi.com/impf/c840336/v840336463/49ae6/5DMwdk-7Yuc.jpg?size=540x720&quality=96&sign=04f0ff92a4507f076db4ed82c20c9a99&c_uniq_tag=2i1OWAjmF_mcYDn5XynsCl0Qu0JuW-sgw62U3CBTFnc&type=album',
    }

    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: '',
    }

  }

  if (action.type === UPDATE_NEW_POST_TEXT) {

    return {
      ...state,
      newPostText: action.text,
    }

  }

  if (action.type === SET_USER_INFO) {
    return {
      ...state,
      userInfo: action.userInfo,
    }
  }

  return state;

}

export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo });

export const updateNewPostTextCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText });

export const addPostCreator = () => ({ type: ADD_POST });

export default profileReducer;

