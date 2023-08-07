import './App.css';
import Signin from './components/Sign/Signin';
import Signup from './components/Sign/Signup';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LeftDrawer from './components/Dashboard/LeftDrawer';
import Home from './components/Dashboard/Home';
import Header from './components/Header/Header';

function App() {
  // const [auth,setIsAuth] = useState(false);
  if(sessionStorage.getItem('id')){
    <Navigate to="/"/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route exact path="/" element={<><Header/><LeftDrawer/><Home/></>} />
        <Route path='*'>Error</Route>
      </Routes>
    </div>
  );
}

export default App;
