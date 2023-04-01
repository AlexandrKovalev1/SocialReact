import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Photo from './components/Photo/Photo';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    <div className='app__wrapper'>
      <div className='container'>
        <Header />
        <Nav />
        <main className='app__wrapper__content'>
          <Routes>
            <Route path='/profile' element={
              <Profile
                profileState={props.state.profilePage}
                dispatch={props.dispatch}
              />
            } />
            <Route path='/dialogs/*' element={
              <Dialogs
                dialogState={props.state.dialogPage}
                dispatch={props.dispatch}
              />
            } />
            <Route path='/photo' element={<Photo />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}





export default App;
