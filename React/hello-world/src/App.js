import './App.css';
import Inline from './components/Inline';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import EventBindClass from './components/EventBindClass';
// import FunctionClick from './components/FunctionClick';
// import ListRendering from './components/ListRendering';
// import ParentComponent from './components/ParentComponent';
import Stylesheets from './components/Stylesheets';
// import {Greet} from './components/Greet';
// import Subscribe from './components/Subscribe';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Greet name='sachin'><p>This is a child</p></Greet>
      <Greet name='shubham'></Greet>
      <Greet name='parth'></Greet>
      <Welcome name='Bruce'></Welcome>
      <Welcome name='Diana'></Welcome>
      <Welcome name='Clark'></Welcome>
      <Subscribe/> */}

      {/* <Counter/>

      <ClassClick/>
      <FunctionClick/>

      <EventBindClass/> */}
      {/* <ParentComponent/> */}
      {/* <ListRendering/> */}
      <Stylesheets primary={true}/>
      <Inline/>
    </div>
  );
}

export default App;
