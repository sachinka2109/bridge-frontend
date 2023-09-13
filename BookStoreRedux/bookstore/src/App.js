import './App.css';
import Router from './router/Router';
import store from './components/reducer/Store';
import { Provider } from 'react-redux';

function App() {
  // const [auth,setIsAuth] = useState(false);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
