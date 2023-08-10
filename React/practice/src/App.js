import './App.css';
// import ClassCounter from './components/class-component/ClassCounter';
// import FunctionCounter from './components/function-component/FunctionCounter';
// import CreateElement from './components/class-component/CreateElemet';
// import FunctionProps from './components/function-component/FunctionProps';
// import StateFunction from './components/function-component/StateFunction';
// import StateClass from './components/class-component/StateClass';
// import ParentClass from './components/class-component/ParentClass';
// import ParentFunction from './components/function-component/ParentFunction';
// import ParentFun from './components/function-component/ParentFun';
// import StateFunctionArray from './components/function-component/StateFunctionArray';
import ComponentC from './components/class-component/ComponentC';
import { UserProvider } from './components/class-component/UseContextClass';
import { ColorProvider } from './components/function-component/UseContextFun';
import ComponentCFun from './components/function-component/ComponentCFun';
import RefClass from './components/class-component/RefClass';
import RefWithClass from './components/class-component/RefWithClass';
import UseRefFun from './components/function-component/UseRefFun';
import UseRefButton from './components/function-component/UseRefButton';
import HigherOrderClass from './components/class-component/HigherOrderClass';
import UpdatedComponent from './components/class-component/HOCClass';
import HoverClass from './components/class-component/HoverClass';
import CounterClass from './components/class-component/CounterClass';

function App() {
  return (
    <div className="App">
      <div className="ClassComponents">
        {/* <ClassCounter/> */}
        {/* <CreateElement/> */}
        {/* <StateClass hobby='Music'/> */}
        <br />
        {/* <ParentClass /> */}
        {/* <UserProvider value={{name:'sachin',nickname:'inflame21'}} >
          <ComponentC />
        </UserProvider> */}
        {/* <RefClass/>
        <RefWithClass /> */}
        {/* <HoverClass />
        <CounterClass name='Sachin'/> */}
      </div>
      <hr />
      <div className="FunctionComponents">
        {/* <FunctionCounter/> */}
        {/* <FunctionProps name="Sachin Kaythamwar"/> */}
        {/* <FunctionProps name='Jason' movieName="Friday the 13th"> */}
          {/* <h2>I am a serial killer</h2> */}
        {/* </FunctionProps> */}
        {/* <StateFunction/> */}
        <br />
        {/* <ParentFunction/> */}
        {/* <ParentFun /> */}
        {/* <StateFunctionArray/> */}  
        {/* <ColorProvider value={'red'}>
          <ComponentCFun/>      
        </ColorProvider> */}
        {/* <UseRefButton/> */}
      </div>
    </div>
  );
}

export default App;
