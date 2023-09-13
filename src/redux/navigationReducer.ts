


let initialState = {
    navItems: [
        {
            id: 1,
            title: 'Профиль',
            path: '/profile',
        },
        {
            id: 2,
            title: 'Сообщения',
            path: '/dialogs',
        },
        {
            id: 3,
            title: 'Найти собеседника',
            path: '/find_companion',
        },
        {
            id: 4,
            title: 'Фото',
            path: '/photo',
        },
        {
            id: 5,
            title: 'Музыка',
            path: '/music',
        },
        {
            id: 6,
            title: 'Новости',
            path: '/news',
        },
        {
            id: 7,
            title: 'Настройки',
            path: '/settings',
        },
    ] as Array<{
        id: number
        title: string
        path: string
    }>
};

type InitialStateType = typeof initialState;

const navigationReducer = (state = initialState,action:any):InitialStateType => state;

export default navigationReducer;