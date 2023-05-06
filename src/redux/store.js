import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: '1',
          text: 'Первый пост 18.03',
          likesCount: '135',
          dizlikesCount: '3',
          avatar: 'https://sun9-16.userapi.com/impf/c840336/v840336463/49ae6/5DMwdk-7Yuc.jpg?size=540x720&quality=96&sign=04f0ff92a4507f076db4ed82c20c9a99&c_uniq_tag=2i1OWAjmF_mcYDn5XynsCl0Qu0JuW-sgw62U3CBTFnc&type=album',
        },
        {
          id: '2',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat dolor vel commodi tempore blanditiis assumenda, cupiditate corporis sequi, laudantium quae quibusdam facere at ullam possimus tenetur nam a rem.',
          likesCount: '100500',
          dizlikesCount: '7',
          avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/03/prikolnaya-kartinka-na-avu-dlya-patsanov.jpg',
        }
      ],

      newPostText: '',
    },

    dialogPage: {
      messages: [
        {
          id: 'myId',
          message: 'Норм Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro minima cum aperiam tenetur dolorum ut enim obcaecati autem? Quod labore sapiente possimus provident ducimus quas odit, molestias ut earum nihil!',
          avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg'
        },
        {
          id: 'Sveta',
          message: '🌝 ✌ 🎲',
          avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
          id: 'myId',
          message: 'Норм Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro minima cum aperiam tenetur dolorum ut enim obcaecati autem? Quod labore sapiente possimus provident ducimus quas odit, molestias ut earum nihil!',
          avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg'
        },
        {
          id: 'Sveta',
          message: '🌝 ✌ 🎲',
          avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
          id: 'myId',
          message: 'Норм Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro minima cum aperiam tenetur dolorum ut enim obcaecati autem? Quod labore sapiente possimus provident ducimus quas odit, molestias ut earum nihil!',
          avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg'
        },
        {
          id: 'Sveta',
          message: '🌝 ✌ 🎲',
          avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
          id: 'Sveta',
          message: 'How are you ',
          avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
          id: 'myId',
          message: 'Норм Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro minima cum aperiam tenetur dolorum ut enim obcaecati autem? Quod labore sapiente possimus provident ducimus quas odit, molestias ut earum nihil!',
          avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg'
        },
        {
          id: 'Sveta',
          message: '🌝 ✌ 🎲',
          avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
          id: 'myId',
          message: ['lorem lorem lorem'],
          avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg'
        }],

      newMessageText: '',

      companions: [
        {
          id: 'Sveta',
          name: 'Света',
          avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
          id: 'Petia',
          name: 'Петя',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-VKuuOzxVnJXFqMA8rkw_lgQj13R7HACCA&usqp=CAU',
        },
        {
          id: 'Serg',
          name: 'Серёжа',
          avatar: 'https://cdnn1.inosmi.ru/img/22993/48/229934848_0:129:1024:641_1240x0_80_0_0_fc06dee210b087046f9670e01644a0c4.jpg.webp',
        },
        {
          id: 'Stepan',
          name: 'Стёпа',
          avatar: 'https://demotivation.ru/wp-content/uploads/2021/11/b97ddee0-ad75-45a4-94ae-c54eababb127.jpg',
        },
        {
          id: 'Givi',
          name: 'Гиви',
          avatar: 'https://cojo.ru/wp-content/uploads/2023/01/krutye-avy-11.webp',
        },
        {
          id: 'Masha',
          name: 'Маша',
          avatar: 'https://cdnn1.inosmi.ru/img/22993/48/229934848_0:129:1024:641_1240x0_80_0_0_fc06dee210b087046f9670e01644a0c4.jpg.webp',
        },
      ],
    },
  },

  _subscriber() {
    console.log('not subscribers');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._subscriber(this);
  },

}

export default store;