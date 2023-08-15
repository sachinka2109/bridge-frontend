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
import { updateArchive } from '../../services/dataService'


function Home() {
  const [viewList,changeViewList] = useState(false);
  const [note,changeNote] = useState(false);
  const [data,setData] = useState([]);
  const [noteState,setNoteState] = useState({
    title:'',
    description:'',
    color:'',
    isArchived:false,
    isDeleted:false,
  })

  const onArchive = async (item) => {
    console.log(item)
    setNoteState({title:item.title,description:item.description,color:item.color,isArchived:true,isDeleted:false},console.log(noteState));
    await updateArchive(noteState);
  }

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
      getData();
    }
    fetchData();
  },[])

  const getData = async() => {
    let response = await getNotes();
    // console.log(response.data.data.data)
    let arr = response.data.data.data
    let newArray = arr.filter(item => item.isArchived === false && item.isDeleted === false)
    setData(newArray)
  }
  

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
        <Box sx={{display:viewList? 'flex':'block',flexWrap:'wrap',justifyContent:'space-evenly',mx:'80px',my:'30px',rowGap:'30px'}}>
        {data.map((item) => (viewList ? 
          (<TakeNoteThree key={item.id} data={item} onArchive={()=> onArchive(item)} getData={getData}/>) : 
          (<TakeNoteThreeList key={item.id} data={item} onArchive={()=> onArchive(item)} getData={getData}/>))
        )}
        </Box>
      </Box>
    </Box>
  )
}

export default Home