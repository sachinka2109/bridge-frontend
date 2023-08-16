import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material'
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree';
import TakeNoteThreeList from '../../components/TakeNoteThree/TakeNoteThreeList';
import { updateArchive } from '../../services/dataService';
import { getNotes } from '../../services/dataService';
import LeftDrawer from '../../components/Dashboard/LeftDrawer';

function Archive(props) {
    const [viewList,changeViewList] = useState(true);
    const [data,setData] = useState([]);
    const[leftDrawerOpen,setLeftDrawerOpen] = useState(false);
    const [searchText,setSearchText] = useState('');
    const onUnArchive = async (item) => {
        let data = {noteIdList:[item.id],isArchived:false}
        await updateArchive(data);
        getData();
    }
    
    const onChangeView = () => {
    changeViewList(!viewList);
    }

    useEffect(()=> {
    async function fetchData() {
        getData();
    }
    fetchData();
    },[])

    useEffect(()=> {
        if(searchText !== '') {
            const searchResult = data.filter(data => data.title.toLowerCase().includes(searchText.toLowerCase()) || data.description.toLowerCase().includes(searchText.toLowerCase()));
            setData(searchResult);
        } else {
            getData();
        }
    },[searchText,data])
    
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
            <LeftDrawer onButtonClick={onChangeView} leftDrawerOpen={leftDrawerOpen} setLeftDrawerOpen={setLeftDrawerOpen}
            searchText={searchText} setSearchText={setSearchText}
            />
        </Box>
        <Box sx={{marginLeft:{xs:'65px',md:leftDrawerOpen? '280px': '68px'}}}>
            <Box sx={{display:viewList? 'flex':'block',flexWrap:'wrap',justifyContent:'flex-start',mx:'80px',my:'30px',rowGap:'30px'}}>
            {data.map((item) => (viewList ? 
            (<TakeNoteThree key={item.id} data={item} onArchive={()=> onUnArchive(item)} getData={getData}/>) : 
            (<TakeNoteThreeList key={item.id} data={item} onArchive={()=> onUnArchive(item)} getData={getData}/>))
            )}
            </Box>
        </Box>
        </Box>
    )
}

export default Archive