import './App.css';
import Home from './components/dashboard/Home';
import SignCombined from './pages/Sign/SignCombined';

function App() {
  // const [auth,setIsAuth] = useState(false);
  return (
    <div className='App'>
      <Home />
      <SignCombined/>
    </div>
  );
}

export default App;
