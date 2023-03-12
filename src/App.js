import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';


const App = () => {
  return (
    <div className='body'>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Profile />
      </div>
    </div>
  );
}





export default App;
