import React from 'react'
import LeftDrawer from './LeftDrawer'
import Notes from '../Notes/Notes'
import Header from '../Header/Header'

function Home() {
  return (
    <div>
      <Header />
      <LeftDrawer />
      <Notes></Notes>
    </div>
  )
}

export default Home