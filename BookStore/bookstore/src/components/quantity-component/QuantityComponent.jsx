import { Box , IconButton, TextField} from '@mui/material'
import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {modifyCartItem,removeCartItem} from '../../services/dataService'

function QuantityComponent() {
    const [count,setCount] = useState(1);
    const handleCount = (string) => {
        if(string === 'minus') {
            if(count === 1) {
                //logic to switch back to button and remove item
            } 
            setCount(prev => prev -1)
        } else if(string === 'plus') {
            setCount(prev => prev +1)
        }
    }

  return (
    <Box>
        <IconButton size='small' sx={{backgroundColor:'#FAFAFA',border:'1px solid #DBDBDB'}} onClick={()=> handleCount('minus')}><RemoveIcon  fontSize='sm'/></IconButton>
        <TextField sx={{width:'50px',mx:1}}
        inputProps={{
            style: {
                padding:4,
                textAlign:'center',
            }
        }}
        value={count}
        />
        <IconButton size='small' sx={{backgroundColor:'#FAFAFA',border:'1px solid #DBDBDB'}} onClick={()=> handleCount('plus')}><AddIcon fontSize='sm'/></IconButton>
    </Box>
  )
}

export default QuantityComponent