import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import navigationReducer from './navigationReducer';
import friendsReducer from './friendsReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';




let redusers = combineReducers({
    auth:authReducer,
    friends: friendsReducer,
    navigation: navigationReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
