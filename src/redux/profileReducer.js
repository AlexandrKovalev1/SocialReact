const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
      id: 3,
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

  return state;

}


export const updateNewPostTextCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText })

export const addPostCreator = () => ({ type: ADD_POST });

export default profileReducer;

