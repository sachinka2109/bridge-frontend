import React from 'react'
import LeftDrawer from './LeftDrawer'
import TakeNoteOne from '../TakeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo'
import TakeNoteThree from '../TakeNoteThree/TakeNoteThree'
import { Box } from '@mui/material'
import TakeNoteThreeList from '../TakeNoteThree/TakeNoteThreeList'
import {useState} from 'react';
import { useEffect } from 'react'
import {getNotes} from '../../services/dataService'


function Home() {
  const [viewList,changeViewList] = useState(false);
  const [note,changeNote] = useState(false);
  const [data,setData] = useState([]);
  const onChangeView = () => {
    changeViewList(!viewList);
  }

  const onChangeNote = () => {
    changeNote(!note);
  } 

  const focusInput = (e) => {
    if(onChangeNote) {
      e.target.current.focus();
    }
  }
  
  useEffect(()=> {
    async function fetchData() {
      let response = await getNotes();
      setData(response.data.data.data)
    }
    fetchData();
  },[])

  return (
    <Box>
      <Box>
        <LeftDrawer onButtonClick={onChangeView}/>
      </Box>
      <Box marginLeft={'65px'}>
        <Box marginTop={'20px'}>
          {
            note? <TakeNoteTwo onFocus={focusInput} onChangeNote={onChangeNote}></TakeNoteTwo >:<TakeNoteOne onChangeNote={onChangeNote}></TakeNoteOne>
          } 
        </Box> 
        {/* <Notes></Notes> */}
        <Box sx={{marginTop:'20px'}}>
          {viewList ? <TakeNoteThree data={data}></TakeNoteThree> : <TakeNoteThreeList></TakeNoteThreeList>}
        </Box>
      </Box>
    </Box>
  )
}

export default Home