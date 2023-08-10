import React from 'react'
import LeftDrawer from './LeftDrawer'
import TakeNoteOne from '../TakeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo'
import TakeNoteThree from '../TakeNoteThree/TakeNoteThree'
import { Box } from '@mui/material'
import TakeNoteThreeList from '../TakeNoteThree/TakeNoteThreeList'

function Home() {
  
  return (
    <div>
      <LeftDrawer/>
      <Box marginTop={'20px'}>
        <TakeNoteOne></TakeNoteOne>
        <TakeNoteTwo></TakeNoteTwo>
      </Box>
      {/* <Notes></Notes> */}
      <Box marginTop={'20px'}>
        <TakeNoteThree></TakeNoteThree>
        <TakeNoteThreeList></TakeNoteThreeList>
      </Box>
    </div>
  )
}

export default Home