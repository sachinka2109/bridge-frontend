import React from 'react'
import LeftDrawer from './LeftDrawer'
import TakeNoteOne from '../TakeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo'
import { Box } from '@mui/material'

function Home() {
  
  return (
    <div>
      <LeftDrawer/>
      <Box>
        <TakeNoteOne></TakeNoteOne>
        <TakeNoteTwo></TakeNoteTwo>
      </Box>
      {/* <Notes></Notes> */}
      {/* <Box marginTop={'20px'}>
        <TakeNoteThree></TakeNoteThree>
      </Box> */}
    </div>
  )
}

export default Home