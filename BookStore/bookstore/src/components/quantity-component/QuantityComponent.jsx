import { Box , IconButton, TextField} from '@mui/material'
import React,{useEffect, useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {getCartItems,modifyCartItem,removeCartItem} from '../../services/dataService'

function QuantityComponent({id,item,setAddCart}) {
    const [cartItem,setCartItem] = useState({});
    // console.log('quantityComponent');
    let counter = cartItem.quantityToBuy;
    const [count,setCount] = useState();
    const handleCount = (string) => {
        if(string === 'minus') {
            if(count === 1) {
                //logic to switch back to button and remove item
                setAddCart(false)
                return removeCartItem(cartItem._id)
            } 
            counter -=1;
            setCount(counter)
            return modifyCartItem(cartItem._id,{quantityToBuy:counter})
        } else if(string === 'plus') {
           counter +=1;
           setCount(counter)
           return modifyCartItem(cartItem._id,{quantityToBuy:counter})
        }
    }

    const getCartItem = async() => {
        let response = await getCartItems();
        const arr = response.data.result;
         let filteredItem = arr.filter(item => item.product_id._id === id)
        setCartItem(filteredItem[0])
        setCount(filteredItem[0].quantityToBuy)
        setAddCart(true)
    }

    useEffect(()=> {
        getCartItem()
    },[])

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