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
  const [viewList,changeViewList] = useState(true);
  const [note,changeNote] = useState(false);
  const [data,setData] = useState([]);
  const[leftDrawerOpen,setLeftDrawerOpen] = useState(false);
  // const [noteState,setNoteState] = useState({
  //   title:'',
  //   description:'',
  //   color:'',
  //   isArchived:false,
  //   isDeleted:false,
  // })

  const onArchive = async (item) => {
    let data = {noteIdList:[item.id],isArchived:true}
    await updateArchive(data);
    getData();
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
    let currentUrl = window.location.href;
    let response = await getNotes();
    // console.log(response.data.data.data)
    let arr = response.data.data.data
    if(currentUrl.includes('dashboard')) {
      let newArray = arr.filter(item => item.isArchived === false && item.isDeleted === false)
      setData(newArray)
    } else if (currentUrl.includes('archive')) {
      let newArray = arr.filter(item => item.isArchived === true)
      setData(newArray)
    } else if(currentUrl.includes('trash')) {
      let newArray = arr.filter(item => item.isDeleted === true)
      setData(newArray)
    }
  }
  
  return (
    <Box>
      <Box>
        <LeftDrawer onButtonClick={onChangeView} leftDrawerOpen={leftDrawerOpen} setLeftDrawerOpen={()=> setLeftDrawerOpen()}/>
      </Box>
      <Box sx={{marginLeft:{xs:'65px',md:!leftDrawerOpen? '65px':'280px'},display:'flex',flexDirection:'column'}}>
        <Box marginTop={'20px'}>
          {
            note? <TakeNoteTwo onFocus={focusInput} onChangeNote={onChangeNote} getData={getData}></TakeNoteTwo >:<TakeNoteOne onChangeNote={onChangeNote}></TakeNoteOne>
          } 
        </Box> 
        <Box sx={{display:viewList? 'flex':'block',flexWrap:'wrap',justifyContent:'center',my:'30px',rowGap:'30px'}}>
        {data.map((item) => (viewList ? 
          (<TakeNoteThree key={item.id} data={item} onArchive={()=> onArchive(item)} getData={getData} /> ) : 
          (<TakeNoteThreeList key={item.id} data={item} onArchive={()=> onArchive(item)} getData={getData}/> ))
        )}
        </Box>
      </Box>
    </Box>
  )
}

export default Home