import profileReducer, { addNewPost } from "./profileReducer";

let state = {
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

test('lenth of posts should be incremented', () => {
    // 1. test data
    let action = addNewPost('My first test')
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});


test('message of new post should be correct', () => {
    // 1. test data
    let action = addNewPost('My first test')
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].text).toBe('My first test');
});

