import './App.css';
import Home from './components/dashboard/Home';
import SignCombined from './pages/Sign/SignCombined';
import Router from './router/Router';

function App() {
  // const [auth,setIsAuth] = useState(false);
  return (
    <div className='App'>
      {/* <Home />
      <SignCombined/> */}
      <Router />
    </div>
  );
}

export default App;
