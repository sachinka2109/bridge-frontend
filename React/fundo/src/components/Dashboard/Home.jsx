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
  const [note,changeNote] = useState(false);
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
      <Box marginLeft={'65px'}>
        <Box marginTop={'20px'}>
          {
            note? <TakeNoteTwo></TakeNoteTwo >:<TakeNoteOne onChangeNote={onChangeNote}></TakeNoteOne>
          } 
        </Box> 
        {/* <Notes></Notes> */}
        <Box sx={{marginTop:'20px'}}>
          {viewList ? <TakeNoteThree></TakeNoteThree> : <TakeNoteThreeList></TakeNoteThreeList>}
        </Box>
      </Box>
    </div>
  )
}

export default Home