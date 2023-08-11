import React from 'react'
import LeftDrawer from './LeftDrawer'
import TakeNoteOne from '../TakeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo'
import TakeNoteThree from '../TakeNoteThree/TakeNoteThree'
import { Box } from '@mui/material'
import TakeNoteThreeList from '../TakeNoteThree/TakeNoteThreeList'
import {useState} from 'react';

function Home() {
  const [viewList,changeViewList] = useState(false);
  const [note,changeNote] = useState(true);
  const onChangeView = () => {
    changeViewList(!viewList);
  }

  const onChangeNote = () => {
    changeNote(!note);
  }
  
  return (
    <div>
      <Box>
        <LeftDrawer onButtonClick={onChangeView}/>
      </Box>
      <Box marginTop={'20px'}>
        {
          note? <TakeNoteTwo></TakeNoteTwo>:<TakeNoteOne></TakeNoteOne>
        } 
      </Box> 
      {/* <Notes></Notes> */}
      <Box marginTop={'20px'}>
        {viewList ? <TakeNoteThree></TakeNoteThree> : <TakeNoteThreeList></TakeNoteThreeList>}
      </Box>
    </div>
  )
}

export default Home