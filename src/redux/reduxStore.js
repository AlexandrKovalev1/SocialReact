import { combineReducers, legacy_createStore as createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import navigationReducer from './navigationReducer';
import friendsReducer from './friendsReducer';


let redusers = combineReducers({
    friends: friendsReducer,
    navigation: navigationReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});


let store = createStore(redusers);

export default store;
