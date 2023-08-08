import './App.css';
import ClassCounter from './components/class-component/ClassCounter';
import FunctionCounter from './components/function-component/FunctionCounter';
// import CreateElement from './components/class-component/CreateElemet';
import FunctionProps from './components/function-component/FunctionProps';
import StateFunction from './components/function-component/StateFunction';
import StateClass from './components/class-component/StateClass';
import ParentClass from './components/class-component/ParentClass';
import ParentFunction from './components/function-component/ParentFunction';
import ParentFun from './components/function-component/ParentFun';
import StateFunctionArray from './components/function-component/StateFunctionArray';

function App() {
  return (
    <div className="App">
      <div className="ClassComponents">
        {/* <ClassCounter/> */}
        {/* <CreateElement/> */}
        {/* <StateClass hobby='Music'/> */}
        <br />
        {/* <ParentClass /> */}
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
        <ParentFun />
        <StateFunctionArray/>
      </div>
    </div>
  );
}

export default App;
