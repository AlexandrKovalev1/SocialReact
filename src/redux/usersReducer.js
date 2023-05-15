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