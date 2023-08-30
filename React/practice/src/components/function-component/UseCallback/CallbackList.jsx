import React, { useEffect, useState } from 'react'

function CallbackList({getItems}) {
    const [items,setItems] = useState([]);

    useEffect(()=> {
        setItems(getItems())
        console.log('setItems')
    },[getItems])
  return items.map(item => <div key={item}>{item}</div>)
}

export default CallbackList