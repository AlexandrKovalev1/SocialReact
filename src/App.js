import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <div className='container'>
          <Header />
          <Nav />
          <main className='app__wrapper__content'>
            <Routes>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/dialogs' element={<Dialogs/>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
