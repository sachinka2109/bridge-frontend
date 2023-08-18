import './App.css';
import MyCounter from './components/class-component/Render-props/MyCounter';
import RenderCounterClass from './components/class-component/Render-props/RenderCounterClass'
import RenderHoverClass from './components/class-component/Render-props/RenderHoverClass';
import RenderNameClass from './components/class-component/Render-props/RenderNameClass';
import UseCallback from './components/function-component/UseCallback/UseCallback';
import UseEffectExample from './components/function-component/UseEffect/UseEffectExample';
import UseMemo from './components/function-component/UseMemo/UseMemo';
import UseReducerExample from './components/function-component/UseReducer/UseReducerExample';
import UseReducerFun from './components/function-component/UseReducer/UseReducerFun';
import UseReducerObject from './components/function-component/UseReducer/UseReducerObject';
import UseRefButton from './components/function-component/UseRef/UseRefButton';
import UseRefCounter from './components/function-component/UseRef/UseRefCounter';
import UseRefFun from './components/function-component/UseRef/UseRefFun';
import UseRefParentFun from './components/function-component/UseRef/UseRefParentFun';
import ChildState from './components/function-component/UseState/ChildState';
import ParentState from './components/function-component/UseState/ParentState';
import StateWithPrev from './components/function-component/UseState/StateWithPrev';
import Task from './components/task/Task';

function App() {
  return (
    <div className="App">
      <div className="ClassComponents">
        {/* <RenderCounterClass />
        <RenderHoverClass/> */}
        {/* <RenderNameClass render={(isLoggedIn) => isLoggedIn ? 'Sachin': 'Guest'} /> */}
        {/* <MyCounter render ={(count,incrementCounter) => <RenderCounterClass count={count} incrementCounter={incrementCounter}/> } />
        <MyCounter render ={(count,incrementCounter) => <RenderHoverClass count={count} incrementCounter={incrementCounter}/> } /> */}
        {/* <MyCounter>{(count,incrementCounter) => <RenderCounterClass count={count} incrementCounter={incrementCounter}/>}</MyCounter> */}
        
      </div>
      <hr />
      <div className="FunctionComponents">
          {/* <UseRefButton />
          <UseRefFun />
          <UseRefCounter /> */}
          {/* <UseRefParentFun /> */}
          {/* <UseReducerFun />
          <UseReducerExample />
          <UseReducerObject /> */}
          {/* <ParentState/> */}
          {/* <StateWithPrev /> */}
          {/* <Task /> */}
          <UseCallback/>
          <UseMemo />
      </div>
    </div>
  );
}

export default App;
