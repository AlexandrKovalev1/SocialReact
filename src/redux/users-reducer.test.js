import usersReducer, { addUserToFriends, unfollow } from "./usersReducer";

let state = {
    users: [
        {
            name: 'TestUnit',
            id: 123,
            folowed: false,
        },
        {
            name: 'TestUnitFollow',
            id: 125,
            followed: true,
        }
    ],
};

test('user must be subscribe', () => {
    // 1. test data
    let action = addUserToFriends(123)
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.users[0].followed).toBe(true);
});

test('user should be unsubscribed', () => {
    // 1. test data
    let action = unfollow(125);
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.users[1].followed).toBe(false);
});