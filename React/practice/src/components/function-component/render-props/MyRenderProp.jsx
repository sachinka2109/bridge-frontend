import React from 'react'
import MyRenderPropChild from './MyRenderPropChild'

const MyRenderProp = () => {
  const myName = "vishwas"
  return (
    <div>
        <MyRenderPropChild name={()=> myName} />
    </div>
  )
}

export default MyRenderProp