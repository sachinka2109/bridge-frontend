import React,{useState,useMemo} from 'react'

function UseMemo() {
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);
    const pow=(a)=>{
        return Math.pow(a,2);
    }
    var val= useMemo(()=>{
        return pow(a);  
    },[a]);
    var val2= useMemo(()=>{
        return pow(b); 
    },[b]);
  return (
    <div>
        <input type="text" onChange={(e)=>{setA(e.target.value)}} />
        <input type="text" onChange={(e)=>{setB(e.target.value)}} />
        Value1:{val}<br />
        Value2:{val2}
    </div>
  )
}

export default UseMemo