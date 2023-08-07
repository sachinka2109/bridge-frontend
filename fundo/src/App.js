import './App.css';
import Header from './components/Header/Header';
import Signin from './components/Sign/Signin';
import Signup from './components/Sign/Signup';
import Home from './components/Dashboard/Home';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LeftDrawer from './components/Dashboard/LeftDrawer';

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
        <Route exact path="/" element={<><LeftDrawer/><Home/></>} />
        <Route path='*'>Error</Route>
      </Routes>
    </div>
  );
}

export default App;
