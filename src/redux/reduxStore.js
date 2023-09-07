import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import dialogsReducer from './dialogsReducer.ts';
import profileReducer from './profileReducer.ts';
import usersReducer from './usersReducer';
import navigationReducer from './navigationReducer';
import friendsReducer from './friendsReducer';
import authReducer from './authReducer.ts';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer.ts';




let redusers = combineReducers({
    auth: authReducer,
    friends: friendsReducer,
    navigation: navigationReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    app: appReducer,
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
