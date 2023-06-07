const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  messages: [
    {
      id: 1,
      nameSender:'Sveta',
      textMessage: 'How are you ',
      avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
    },
    {
      id: 2,
      nameSender:'Boss',
      textMessage: 'Норм Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro minima cum aperiam tenetur dolorum ut enim obcaecati autem? Quod labore sapiente possimus provident ducimus quas odit, molestias ut earum nihil!',
      avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg'
    },
    {
      id: 3,
      nameSender:'Sveta',
      textMessage: '🌝 ✌ 🎲',
      avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
    },
    {
      id: 4,
      nameSender:'Boss',
      textMessage: ['lorem lorem lorem'],
      avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg'
    }],

  newMessageText: '',

  companions: [
    {
      id: 1,
      name: 'Света',
      avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13',
      status: 'Online',
    },
    {
      id: 2,
      name: 'Петя',
      avatar: 'https://sc04.alicdn.com/kf/H10822b48910b42fdac1a2881b877bd0ce.jpg',
      status: 'Offline',
    },
    {
      id: 3,
      name: 'Серёжа',
      avatar: 'https://avatanplus.com/files/photos/mid/5835babbdaf0515891e16df9.jpg',
      status: 'Offline',
    },
    {
      id: 4,
      name: 'Стёпа',
      avatar: 'https://demotivation.ru/wp-content/uploads/2021/11/b97ddee0-ad75-45a4-94ae-c54eababb127.jpg',
      status: 'Offline',
    },
    {
      id: 5,
      name: 'Гиви',
      avatar: 'https://cojo.ru/wp-content/uploads/2023/01/krutye-avy-11.webp',
      status: 'Online',
    },
    {
      id: 6,
      name: 'Маша',
      avatar: 'https://cdnn1.inosmi.ru/img/22993/48/229934848_0:129:1024:641_1240x0_80_0_0_fc06dee210b087046f9670e01644a0c4.jpg.webp',
      status: 'Online',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {


  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {

    return {
      ...state,
      newMessageText: action.text,
    }

  }

  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: state.messages.length+1,
      nameSender:'Boss',
      textMessage: state.newMessageText,
      avatar: 'https://stihi.ru/pics/2015/02/10/1261.jpg',
    }

    return {
      ...state,
      messages: [...state.messages, newMessage],

      newMessageText: '',
    }
  }

  return state;
}

export const updateNewMessageTextCreator = (textMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: textMessage,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;



