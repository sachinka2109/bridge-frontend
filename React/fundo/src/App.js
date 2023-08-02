import './App.css';
import Header from './components/Header/Header';
import Signin from './components/Sign/Signin';
import Signup from './components/Sign/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Signin></Signin>
      <Signup></Signup>
    </div>
  );
}

export default App;
