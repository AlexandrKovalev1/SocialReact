const SHOW_NEXT_USERS = 'SHOW-NEXT-USERS';
const SHOW_PREV_USERS = 'SHOW-PREV-USERS';
const HIDE_USER = 'HIDE-USER';
const ADD_USER_TO_FRIENDS = 'ADD-USER-TO-FRIENDS';


const initialState = {
    users: [
        {
            id: 1,
            fullname: 'Ivan Ivanov',
            avatar: 'https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg',
            status: 'Первый',
            location: {
                country: 'Россия',
                sity: 'Москва',
            },
        },
        {
            id: 2,
            fullname: 'Petr Petrov',
            avatar: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-023.jpg',
            status: 'Второй',
            location: {
                country: 'Россия',
                sity: 'Санкт-Петербург',
            },
        },
        {
            id: 3,
            fullname: 'Cветлана Моя',
            avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13',
            status: 'Третий',
            location: {
                country: 'Украина',
                sity: 'Одесса',
            },
            folowed: true,
        },
        {
            id: 4,
            fullname: 'ЯН Тайна',
            avatar: 'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png',
            status: 'Четвертый',
            location: {
                country: 'Мексика',
                sity: '',
            },
        },

    ],
    friends: [
        {
            id: 'Sveta',
            name: 'Света',
            avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
            id: 'Lechich',
            name: 'Лёхич',
            avatar: 'https://www.pngall.com/wp-content/uploads/4/Jason-Statham-PNG-Photo.png',
        },
        {
            id: 'Petia',
            name: 'Петя',
            avatar: 'https://sc04.alicdn.com/kf/H10822b48910b42fdac1a2881b877bd0ce.jpg',
        },
        {
            id: 'Serg',
            name: 'Серёжа',
            avatar: 'https://avatanplus.com/files/photos/mid/5835babbdaf0515891e16df9.jpg',
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
        {
            id: 'Sveta',
            name: 'Света',
            avatar: 'https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13'
        },
        {
            id: 'Lechich',
            name: 'Лёхич',
            avatar: 'https://www.pngall.com/wp-content/uploads/4/Jason-Statham-PNG-Photo.png',
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    if (action.type === SHOW_NEXT_USERS) {
        console.log('nextUser');
        return state;
    }

    if (action.type === SHOW_PREV_USERS) {
        console.log('prevUser');
        return state;
    }

    if (action.type === HIDE_USER) {
        console.log('Hide');
        return state;
    }

    if (action.type === ADD_USER_TO_FRIENDS) {
        console.log('ADD user');
        return state;
    }
    return state;
};



export const showNextUsersCreator = () => ({ type: SHOW_NEXT_USERS});

export const showPrevUsersCreator = () => ({ type: SHOW_PREV_USERS });

export const hideUserCreator = () => ({ type: HIDE_USER });

export const addUserToFriendsCreator = () => ({ type: ADD_USER_TO_FRIENDS });



export default usersReducer;