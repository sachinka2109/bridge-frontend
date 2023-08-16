import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material'
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree';
import TakeNoteThreeList from '../../components/TakeNoteThree/TakeNoteThreeList';
import { getNotes } from '../../services/dataService';
import LeftDrawer from '../../components/Dashboard/LeftDrawer';
import { deleteItem } from '../../services/dataService';

function Trash(props) {
    const [viewList,changeViewList] = useState(true);
    const [data,setData] = useState([]);
    
    const onChangeView = () => {
    changeViewList(!viewList);
    }

    const restoreItem = async (id) => {
        let data = {noteIdList:[id],isDeleted:false}
        await deleteItem(data);
        getData();
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
                <LeftDrawer onButtonClick={onChangeView}/>
            </Box>
            <Box marginLeft={'65px'}>
                <Box sx={{display:viewList? 'flex':'block',flexWrap:'wrap',justifyContent:'flex-start',mx:'80px',my:'30px',rowGap:'30px'}}>
                {data.map((item) => (viewList ? 
                (<TakeNoteThree key={item.id} data={item} getData={getData} restoreItem={() => restoreItem(item.id)}/>) : 
                (<TakeNoteThreeList key={item.id} data={item} getData={getData} restoreItem={() => restoreItem(item.id)}/>))
                )}
                </Box>
            </Box>
        </Box>
    )
}

export default Trash