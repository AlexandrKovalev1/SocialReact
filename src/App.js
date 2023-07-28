import './App.css';
import Photo from './components/Photo/Photo';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NavContainer from './components/Navigation/NavContainer';
import AsideFriendsContainer from './components/AsideFriends/AsideFriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginPage/LoginPage';
import WithRouter from './components/common/hoc/WithRouter';

const App = (props) => {
  let loginPage = props.router.location.pathname === '/login';

  return (
    <div className='app__wrapper'>
      <div className={!loginPage ? 'container_isAuth' : 'container'}>
        <HeaderContainer />
        <NavContainer />
        <AsideFriendsContainer />
        <main className='app__wrapper__content'>
          <Routes>

            <Route path='/profile/:userId?'
              element={<ProfileContainer />}>
            </Route>

            <Route path='/find_companion'
              element={<UsersContainer />}>
            </Route>

            <Route path='/dialogs/*'
              element={<DialogsContainer />}>
            </Route>

            <Route path='/photo'
              element={<Photo />}>
            </Route>

            <Route path='/music'
              element={<Music />}>
            </Route>

            <Route path='/news'
              element={<News />}>
            </Route>

            <Route path='/settings'
              element={<Settings />}>
            </Route>

            <Route path='/login'
              element={<LoginPage />}>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}



let mapStateToprops = (state) => ({ isAuth: state.auth.isAuth })

export default WithRouter(App);
