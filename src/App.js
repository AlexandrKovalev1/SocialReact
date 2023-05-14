import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Photo from './components/Photo/Photo';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NavContainer from './components/Navigation/NavContainer';


const App = (props) => {
  return (
    <div className='app__wrapper'>
      <div className='container'>
        <Header />
        <NavContainer />
        <main className='app__wrapper__content'>
          <Routes>
            <Route path='/profile'
              element={<Profile />}>
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

          </Routes>
        </main>
      </div>
    </div>
  );
}





export default App;
