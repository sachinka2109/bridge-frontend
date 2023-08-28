import React from 'react'
import { Grid, Typography} from '@mui/material'
import Book from '../../Images/Book.png'
import QuantityComponent from '../quantity-component/QuantityComponent';
import { removeCartItem,deleteWishList } from '../../services/dataService';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({data,getCart,myRef}) {
    console.log('cartItem',data)
    const removeItem = async() => {
        if(data.quantityToBuy) {
            await removeCartItem(data._id)
            getCart();
        } else {
            await deleteWishList(data.product_id._id)
        }
    }
  return (
    <Grid container sx={{my:1,justifyContent:'space-between'}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start'}}>
            <Grid item>
                <img src={Book} alt='book' style={{height:85,objectFit:'contain'}}/>
            </Grid>
            <Grid item sx={{marginLeft:5}}>
                <Grid item>
                    <Typography variant="h6" color="initial" sx={{fontWeight:'bold',lineHeight:1,display:'flex'}}>{data.product_id.bookName} {myRef && data.quantityToBuy && (<div style={{margin:'0 0 0 10px'}}> x{data.quantityToBuy}</div>)}</Typography>
                    <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D',marginTop:2,marginBottom:1}}>{data.product_id.author}</Typography>
                    {!data.quantityToBuy ?  (
                        <Typography variant="body1" color="initial" component={'div'} sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                            Rs. {data.product_id.discountPrice}
                            <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D',mx:2}}>Rs.{data.product_id.price}</Typography>
                        </Typography>
                    ):
                    (
                        <Typography variant="body1" color="initial" component={'div'} sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                            Rs. {data.product_id.discountPrice * data.quantityToBuy}
                            <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D',mx:2}}>Rs.{data.product_id.price * data.quantityToBuy}</Typography>
                        </Typography>
                    )}
                </Grid>
                {
                 !myRef && (
                    <Grid item sx={{display:'flex',alignItems:'center',marginTop:1}}>
                        <QuantityComponent item = {data} getCart={getCart}/>
                        <Typography variant="body1" color="initial" sx={{mx:{xs:1,sm:2},cursor:'pointer'}} onClick={removeItem}>Remove</Typography>
                    </Grid>
                 )
                }
            </Grid>
        </Grid>
        {
            !data.quantityToBuy &&(                
                <Grid item> 
                    <DeleteIcon  sx={{cursor:'pointer'}} onClick={removeItem}/>
                </Grid>
            )
        }
    </Grid>
  )
}

export default CartItem