import './App.css';
import MyCounter from './components/class-component/Render-props/MyCounter';
import RenderCounterClass from './components/class-component/Render-props/RenderCounterClass'
import RenderHoverClass from './components/class-component/Render-props/RenderHoverClass';
import RenderNameClass from './components/class-component/Render-props/RenderNameClass';
import Canvas from './components/function-component/Canvas/Canvas';
import MainCallback from './components/function-component/UseCallback/MainCallback';
import UseCallback from './components/function-component/UseCallback/UseCallback';
import UseEffectExample from './components/function-component/UseEffect/UseEffectExample';
import UseMemo from './components/function-component/UseMemo/UseMemo';
import UseRedCompA from './components/function-component/UseReducer/UseRedCompA';
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
import { createContext, useReducer } from 'react';

const initialState = 0;
const reducer = (currentState,action) => {
    switch (action) {
        case 'INCREMENT': 
            return currentState + 1;
        case 'DECREMENT':
            return currentState - 1;
        case 'RESET':
            return initialState;
        default: 
            return currentState;
    }
}

export const countContext = createContext()

function App() {
  const [count,dispatch] = useReducer(reducer,initialState);

  return (
    <countContext.Provider value={{countState:count,countDispatch:dispatch}}>
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
            {/* <UseCallback/>
            <UseMemo /> */}
            {/* <UseRedCompA/> */}
            {/* <MainCallback /> */}
            <Canvas/>
        </div>
      </div>
    </countContext.Provider>
  );
}

export default App;
