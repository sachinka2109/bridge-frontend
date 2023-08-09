import React,{useState} from 'react'
import ChildFun from './ChildFun';
import colorContext from './colorContext';

function ParentFun(props) {
    let [color, setChangeColor] = useState('');
    const state = {
      
    }
  return (
    <ParentFun.provider value={state}>
      <div>
          <div className="container" style={{width:'100px',height:'100px',backgroundColor:color}}>
              <ChildFun changeColor={setChangeColor}/>
          </div>
      </div>
    </ParentFun.provider>
  )
}

export default ParentFun