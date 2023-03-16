import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Main from './components/Main/Main';


const App = () => {
  return (
    <div className='app__wrapper'>
      <div className='container'>
        <Header />
        <Nav />
        <Main />
      </div>
    </div>
  );
}





export default App;
