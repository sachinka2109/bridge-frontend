import React,{useState} from 'react'
import ChildFun from './ChildFun';

function ParentFun(props) {
    let [color, setChangeColor] = useState('');

  return (
    <div>
      <div className="container" style={{width:'100px',height:'100px',backgroundColor:color}}>
        <ChildFun changeColor={setChangeColor}/>
      </div>
    </div>
  )
}

export default ParentFun